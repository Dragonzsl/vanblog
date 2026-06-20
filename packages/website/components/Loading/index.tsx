export default function (props: { children: any; loading: boolean }) {
  if (props.loading) {
    return (
      <div className="loader">
        <div className="sakura" />
        <div className="sakura" />
        <div className="sakura" />
        <div className="sakura" />
        <div className="sakura" />
        <div className="sakura" />
      </div>
    );
  }
  return props?.children;
}
