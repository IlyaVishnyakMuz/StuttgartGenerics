import { Button } from "../../components/Button/Button";
import { Cardarea } from "../../components/Cardarea/Cardarea";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import { Template } from "../../components/Template/Template";
import { Workspace } from "../../components/Workspace/Workspace";
import { ChooseImage } from "../../components/ChooseImage/ChooseImage";
import { useState, useRef } from "react";
import { Card_5 } from "../../cards/Card_5/Card_5";
import { toPng } from "html-to-image";

export function Template_5() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const ref = useRef<HTMLDivElement>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleExport = async () => {
        if (!ref.current) return;
        ref.current.style.transform = "scale(1)";
        const dataUrl = await toPng(ref.current, { quality: 0.95 });
        const link = document.createElement("a");
        link.download = "my-component.jpg";
        link.href = dataUrl;
        link.click();
        ref.current.style.transform = "scale(0.5)";
    };
    
    return(
        <Template>
            <Workspace>
                <Input placeholder="Заголовок" value={title} onChange={handleTitleChange} />
                <Textarea placeholder="Описание" value={description} onChange={handleDescriptionChange} />
                <ChooseImage onChange={handleImageChange} />
                <Button text="Сгенерировать" onClick={handleExport} />
            </Workspace>
            <Cardarea>
                <Card_5 ref={ref} title={title} description={description} image={image} />
            </Cardarea>
        </Template>
    )
}
