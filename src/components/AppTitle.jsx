export default function AppTitle(props) {
  const {
    title = 'Box Office App',
    subtitle = 'Are You Looking For a Moive Or Actor?',
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
