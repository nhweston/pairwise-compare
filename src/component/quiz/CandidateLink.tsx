import { Candidate } from "../../data";

interface Props {
  website: Candidate['website']
}

const CandidateLink = (props: Props) => {
  const { website } = props;
  if (typeof website === 'string') {
    return <p style={{ textAlign: 'center' }}><a href={website} target="_blank">View policies</a><br/>&nbsp;</p>
  }
  if (typeof website === 'object' && website !== null) {
    return (
      <p style={{ textAlign: 'center' }}>View policies:<br/>{
        website.flatMap(({ name, url }, i) =>
          i === website.length - 1 ?
            [<a key={i * 2} href={url} target="_blank">{name}</a>] :
            [<a key={i * 2} href={url} target="_blank">{name}</a>, <span key={i * 2 + 1}> | </span>]
        )
      }</p>
    );
  }
  return <p>&nbsp;<br />&nbsp;</p>;
};

export default CandidateLink;
