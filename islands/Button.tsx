interface ButtonProps {
  text: string;
  colorIndex: number;
  disabled: boolean;
  onClick: (text: string) => void;
}

const colors = [
  'bg-gradient-to-br from-pink-400 to-purple-300',
  'bg-gradient-to-br from-rose-400 to-pink-300',
  'bg-gradient-to-br from-teal-400 to-blue-300',
  'bg-gradient-to-br from-lime-400 to-yellow-300',
];

const Button = ({ text, colorIndex, disabled = false, onClick }: ButtonProps) => {
  const color = colors[colorIndex % colors.length];
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(text)}
      className={`${color} text-white font-bold p-2 text-lg rounded-lg border`}
    >
      {text}
    </button>
  );
};

export default Button;
