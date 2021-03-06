interface Props {
  progress: number
}

const ProgressBar = (props: Props) => {
  const { progress } = props;
  const percentage = Math.round(progress * 100);
  return (
    <div
      style={{
        height: 20,
        maxWidth: '400px',
        width: '100%',
        border: '1px solid',
        borderRadius: 50,
        margin: 0,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress * 100}%`,
          backgroundColor: '#dddddd',
          borderRadius: 'inherit',
          textAlign: 'right',
        }}
      >
        <span
          style={{
            boxSizing: 'border-box',
            padding: 5,
            fontWeight: 'bold',
          }}
        >
          {`${percentage}%`}
        </span>
      </div>
    </div>
  )
};

export default ProgressBar;
