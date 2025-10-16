import { Button } from "../../components/Button/Button";
import { Cardarea } from "../../components/Cardarea/Cardarea";
import { Input } from "../../components/Input/Input";
import { Template } from "../../components/Template/Template";
import { Workspace } from "../../components/Workspace/Workspace";
import { ChooseImage } from "../../components/ChooseImage/ChooseImage";
import { useState, useRef } from "react";
import { Card_1 } from "../../cards/Card_1/Card_1";
import { toPng } from "html-to-image";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { ColorPicker } from "../../components/ColorPicker/ColorPicker";

export function Template_1() {
    const [color, setColor] = useState('#2D3F65');
    const [logo, setLogo] = useState('');
    const [topTitle, setTopTitle] = useState('');
    const [guarantee, setGuarantee] = useState(false);
    const [title, setTitle] = useState('');
    const [articul, setArticul] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [element1, setElement1] = useState('');
    const [element2, setElement2] = useState('');
    const [element3, setElement3] = useState('');

    const ref = useRef<HTMLDivElement>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleTopTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopTitle(e.target.value);
    }

    const handleArticulChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArticul(e.target.value);
    }

    const handleElement1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setElement1(e.target.value);
    }

    const handleElement2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setElement2(e.target.value);
    }

    const handleElement3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setElement3(e.target.value);
    }

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setLogo(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

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
                <ColorPicker color={color} setColor={(e) => setColor(e.target.value)} />
                <ChooseImage title="Выбрать логотип" onChange={handleLogoChange} />
                <Input placeholder="Текст вверху" value={topTitle} onChange={handleTopTitleChange} />
                <Checkbox value={guarantee} onChange={(e) => setGuarantee(e.target.checked)} />
                <Input placeholder="Заголовок" value={title} onChange={handleTitleChange} />
                <Input placeholder="Артикул" value={articul} onChange={handleArticulChange} />
                <ChooseImage onChange={handleImageChange} />
                <Input placeholder="Элемент 1" value={element1} onChange={handleElement1Change} />
                <Input placeholder="Элемент 2" value={element2} onChange={handleElement2Change} />
                <Input placeholder="Элемент 3" value={element3} onChange={handleElement3Change} />
                <Button text="Сгенерировать" onClick={handleExport} />
            </Workspace>
            <Cardarea>
                <Card_1 
                    ref={ref} 
                    color={color}
                    logo={logo} 
                    topTitle={topTitle}
                    guarantee={guarantee}
                    title={title} 
                    articul={articul} 
                    image={image}
                    element1={element1}
                    element2={element2}
                    element3={element3}
                />
            </Cardarea>
        </Template>
    )
}
