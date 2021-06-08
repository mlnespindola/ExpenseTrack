
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(item => item.value);
    const dataPointMaxValue = Math.max(...dataPointValues); //pulling out the values of the array w the spread operator, because math.max( ) expects a list of arguments and not an araay
    return (
        <div className='chart'>
            {props.dataPoints.map( dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={dataPointMaxValue}
                    label={dataPoint.label}
                    key={dataPoint.label} 
                />
            ))}
        </div>
    )
}

export default Chart;