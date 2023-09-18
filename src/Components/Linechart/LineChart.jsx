import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, sName: "Doe", math_mark: 85, physics_mark: 78, biology_mark: 92 },
        { id: 2, sName: "Smith", math_mark: 92, physics_mark: 88, biology_mark: 76 },
        { id: 3, sName: "Johnson", math_mark: 78, physics_mark: 84, biology_mark: 90 },
        { id: 4, sName: "Emily ", math_mark: 95, physics_mark: 92, biology_mark: 88 },
        { id: 5, sName: "Wilson", math_mark: 88, physics_mark: 80, biology_mark: 94 },
        { id: 6, sName: "Sarah", math_mark: 76, physics_mark: 70, biology_mark: 82 },
        { id: 7, sName: "Lee", math_mark: 90, physics_mark: 85, biology_mark: 91 },
        { id: 8, sName: "Miller", math_mark: 89, physics_mark: 82, biology_mark: 79 },
        { id: 9, sName: "Daniel", math_mark: 84, physics_mark: 76, biology_mark: 87 },
        { id: 10, sName: "Olivia", math_mark: 91, physics_mark: 88, biology_mark: 93 }
    ];



    return (
        <div className='flex justify-center'>
            <Lchart width={900} height={400} data={studentData}>
                <XAxis dataKey='sName'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math_mark' stroke='red'></Line>
                <Line dataKey='physics_mark' stroke='green'></Line>
                <Line dataKey='biology_mark' stroke='yellow'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;