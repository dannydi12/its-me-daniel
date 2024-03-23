type Props = {
  text: string;
};

export default function Tag({ text }: Props) {
  return (
    <span className="border-2 border-primary-500 px-2 capitalize text-primary-600 ">
      {text}
    </span>
  );
}
