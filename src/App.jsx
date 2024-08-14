import ButtonPrimary from "./Components/Buttons/ButtonPrimary";
import SecondaryButton from "./Components/Buttons/SecondaryButton";

export default function App() {
  return (
    <div className="p-4">
      <div className="my-4">
        <h1 className="text-2xl font-bold">Botones</h1>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold">Primary</h3>
      </div>
      <div className="space-y-4">
        <ButtonPrimary
          text="Button Component"
          size="xsm"
          hover="hover:bg-primary-background-hover"
        />
        <ButtonPrimary
          text="Button Component"
          size="sm"
          hover="hover:bg-primary-background-hover"
        />
        <ButtonPrimary
          text="Button Component"
          size="md"
          hover="hover:bg-primary-background-hover"
        />
        <ButtonPrimary
          text="Button Component"
          size="lg"
          hover="hover:bg-primary-background-hover"
        />
        <ButtonPrimary
          text="Button Component"
          size="xlg"
          hover="hover:bg-primary-background-hover"
        />
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold">Secondary</h3>
      </div>
      <div className="space-y-4">
        <SecondaryButton text="Secondary Button" size="xsm" borderSize="xsm" />
        <SecondaryButton text="Secondary Button" size="sm" borderSize="sm" />
        <SecondaryButton text="Secondary Button" size="md" />
        <SecondaryButton text="Secondary Button" size="lg" borderSize="lg" />
        <SecondaryButton text="Secondary Button" size="xlg" borderSize="xlg" />
      </div>
    </div>
  );
}
