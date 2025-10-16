import { removeBackground } from "@imgly/background-removal";

const trimTransparent = async (blob: Blob): Promise<Blob> => {
    const bitmap = await createImageBitmap(blob);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    ctx.drawImage(bitmap, 0, 0);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imgData;

    let top = height, bottom = 0, left = width, right = 0;

    // 🔍 ищем минимальный прямоугольник, где есть непрозрачные пиксели
    for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 0) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
        }
    }
    }

    const cropWidth = right - left + 1;
    const cropHeight = bottom - top + 1;

    const trimmedCanvas = document.createElement("canvas");
    trimmedCanvas.width = cropWidth;
    trimmedCanvas.height = cropHeight;
    const trimmedCtx = trimmedCanvas.getContext("2d")!;
    trimmedCtx.drawImage(canvas, left, top, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

    return await new Promise<Blob>((resolve) =>
    trimmedCanvas.toBlob((b) => resolve(b!), "image/png")
    );
};



export const processImage = async (image: string | null) => {
    if (!image) return;

    const response = await fetch(image);
    const blob = await response.blob();

    const bgRemoved = await removeBackground(blob);

    const trimmed = await trimTransparent(bgRemoved);

    const url = URL.createObjectURL(trimmed);
    return url;
};