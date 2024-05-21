import style from "./Input.module.css";

interface InputProps {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type = 'text', value, onChange }: InputProps) => {
  return (
    <input 
      type={type} 
      className={style["input"]} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

