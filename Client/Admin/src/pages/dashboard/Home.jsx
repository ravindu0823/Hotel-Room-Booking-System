import React, { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { statisticsCardsData, statisticsChartsData } from "@/data";
import { ClockIcon } from "@heroicons/react/24/solid";
import axios from "@/api/axios";
import { COUNTS_URL } from "@/api/axios";

export function Home() {
  const [card, setCard] = React.useState([statisticsCardsData]);

  useEffect(() => {
    const counts = async () => {
      const res = await axios.get(COUNTS_URL);
      console.log(res.data);

      setCard(statisticsCardsData[0].value = res.data.reservations);
      setCard(statisticsCardsData[1].value = res.data.users);
      setCard(statisticsCardsData[2].value = res.data.staff);
      
    }

    counts();
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon
                  strokeWidth={2}
                  className="h-4 w-4 text-blue-gray-400"
                />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      
    </div>
  );
}

export default Home;
