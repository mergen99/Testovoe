import React, { useState } from "react";
import { MainStyled, Inner, InnerLeft, InnerRight, Text, Line, Button } from '../../styles/Main.styled';
import { Container } from "../../styles/Container.styled";
import { MdOutlineSaveAlt } from 'react-icons/md';
import { Chart } from "../Chart/Chart";
import { Doughnut } from "../Doughnut/Doughnut";


let descrData = require("../../CommissNewWells_BarChart_description.json");
let PieChart = require("../../RegionalStructure_PieChart.json");
let BarDescrData = require("../../BarChart_descriptionFond.json");
let PieChartFond = require("../../PieChartFond.json");
let barChartData = require("../../CommissNewWells_BarChart.json");
let barChartFond = require("../../BarChartFond.json");
let ModalData = {
  Добыча: [],
  Экспорт: [],
  'Технологические показатели':[],
  Развитие:[]
}

export const Main = () => {
  const [pie, setPie] = useState(PieChart);
  const [pieActive, setPieActive] = useState(Object.values(PieChart)[0].name);
  const [statActive, setStatActive] = useState('Всего');
  const [activeModal, setActiveModal] = useState(false);
  console.log(activeModal);
  return (
    <MainStyled>
      <Container>
        <Inner>
          <InnerLeft>
            <Text>
              НЕФТЯНАЯ ПРОМЫШЛЕННОСТЬ
            </Text>
            <Container margin={'20px 0 0 10px'} mw={'20px'} height={'20px'} display={'flex'} fd={'column'} onClick={() => setActiveModal(!activeModal)}>
              <Line />
              <Line />
              <Line />
            </Container>
          </InnerLeft>
          <InnerRight mr={'63px'}>
            <MdOutlineSaveAlt width={'40px'} height={'20px'} />
            <Text fs={'12px'} fw={'100'} mr={'2px 0 0 5px'}>
              Скачать отчет
            </Text>
          </InnerRight>
        </Inner>
        <Container display={activeModal === true ? 'none' : 'block'}>
          <Inner>
            <Text fs={"30px"} color={'rgb(225, 35, 35)'}>
              ВВОД НОВЫХ СКВАЖИН
            </Text>
          </Inner>
          <Inner mt={'20px'}>
            <Container margin={'0'} display={'flex'}>
              <Button padd={'5px 30px 5px 30px'} bc={'Всего' === statActive ? 'black' : ''} cr={'Всего' === statActive ? 'white' : ''} onClick={() => setStatActive('Всего')}>
                Всего
              </Button>
              <Button ml={'10px'} bc={'Фонд эксплутационных скважин' === statActive ? 'black' : ''} cr={'Фонд эксплутационных скважин' === statActive ? 'white' : ''} onClick={() => setStatActive('Фонд эксплутационных скважин')}>
                Фонд эксплутационных скважин
              </Button>
            </Container>
          </Inner>
          <Inner mw={'55%'}>
            <Chart active={statActive} />
            <Text fs={'15px'} mr={'40px 0 0 50px'} >
              Изменения<br /> к отчетному году
              <br />
              <br />
              {statActive === "Всего" ? Math.abs((barChartData[barChartData.length - 2].value - barChartData[barChartData.length - 1].value) / barChartData[barChartData.length - 1].value).toFixed(3) * 100 + '%' : Math.abs((barChartFond[barChartFond.length - 2].value - barChartFond[barChartFond.length - 1].value) / barChartFond[barChartFond.length - 1].value).toFixed(3) * 100 + '%'}
              <br />
              <br />
              {statActive === "Всего" ? barChartData[barChartData.length - 1].value - barChartData[barChartData.length - 2].value : barChartFond[barChartFond.length - 1].value - barChartFond[barChartFond.length - 2].value}
              <br />
              <Text fs={'11px'} mr={'0'}>
                млрд куб.
              </Text>
            </Text>
          </Inner>
          <Inner mt={'60px'} jc={'normal'}>
            <InnerLeft mh={'105px'}>
              <Text mr={"0 5px 0 0"} fs={'11px'} wd={'240px'} color={'black'}>
                {statActive === 'Всего' ?
                  descrData.description.left : BarDescrData.description.left}
              </Text>
              <Line ht={'100%'} mt={'0'} wd={'2px'} bc={'gray'} />
            </InnerLeft>
            <InnerRight mw={'100%'} ht={'100%'} ml={'40px'}>
              <Text fs={'20px'} mr={statActive === 'Всего' ? '20px 0 0 0' : '0'} >
                {statActive === 'Всего' ?
                  descrData.description.right : BarDescrData.description.right}
              </Text>
            </InnerRight>
          </Inner>
          <Inner mt={'70px'} jc={'normal'} mb={'60px'}>
            <InnerLeft fd={'column'}>
              <Text mr={'0 auto 20px 0'} fs={'15px'}>
                Региональная структура
              </Text>
              {
                pie.map(item => {
                  return <Button wd={'100%'} mt={'10px'} padd={'15px 0 15px 10px'} fs={'11px'} dy={'flex'} jc={'flex-start'} bc={pieActive === item.name ? 'black' : ''} cr={pieActive === item.name ? 'white' : ''} onClick={() => setPieActive(item.name)}>{item.name}</Button>
                })
              }
            </InnerLeft>
            <InnerRight mw={'600px'} ht={'200px'} ml={'100px'} pos={'relative'}>
              <Doughnut active={statActive} />
              <Text pos={'absolute'} fs={'17px'} top={'111px'} left={'78px'}>
                {statActive === 'Всего' ?
                  (PieChart.map((item) => pieActive === item.name ? Math.abs(((item.value - item.prev) / item.prev * 100)).toFixed(2) + '%' : '')) :
                  (PieChartFond.map((item) => pieActive === item.name ? Math.abs(((item.value - item.prev) / item.prev * 100)).toFixed(2) + '%' : ''))
                }
              </Text>
              <Text fs={'25px'} mr={'70px 0 0 0'}>
                {statActive === 'Всего' ? PieChart.map(item => pieActive === item.name ? item.prev - item.value : '') : PieChartFond.map(item => pieActive === item.name ? Math.round((item.prev - item.value) * 10) / 10 : '')}
                <br />
                <Text fs={'10px'} mr={'0'}>п.п.</Text>
              </Text>
            </InnerRight>
          </Inner>
        </Container>
        <Container>
          <Inner >
            Основные тенденции и факторы
          </Inner>
        </Container>
      </Container>
    </MainStyled>)
}