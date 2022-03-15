import './Results.scss';
export function Results(props) {
    const {people, num} = props
    
    return (
      <li className="result">
        <span className="result__num">{num}ta</span>
        <span className="result__people">{people}</span>
        <div className="result__line--group">
          <div className="result__line--first"></div>
          <div className="result__line--second"></div>
        </div>
      </li>
    );
}