import { defineStore } from 'pinia';
import ON from '@/assets/workplaceView/CapacitorDetectionView/CapacitorDetection-on.png';
import OFF from '@/assets/workplaceView/CapacitorDetectionView/CapacitorDetection-off.png';

const useUserDataList = defineStore('data', {
  state: () => {
    return {
      title: '',
      PrimaryName: '嘉德广场',
      SecondaryName: '电容柜',
      MA: 'mA',
      A: 'A',
      V: 'V',
      KW: 'kW',
      KWH: 'kWh',
      highPressure: [
        {
          highPressureList: [
            {
              cardName: '高压设备2',
              title: '',
              children: [
                {
                  name: '负载率',
                  value: '23.75',
                  isShow: true,
                },
                {
                  name: '功率因数',
                  value: '0.81',
                  isShow: true,
                },
                {
                  name: '额定容量',
                  value: '8400kVA',
                  isShow: false,
                },
              ],
            },
            {
              title: '负载',
              children: [
                {
                  name: '有功',
                  value: '163kW',
                  isShow: true,
                },
                {
                  name: '无功',
                  value: '-321kVar',
                  isShow: true,
                },
                {
                  name: '视在',
                  value: '1994.4kVA',
                  isShow: false,
                },
              ],
              span: 12,
            },
            {
              title: '损耗',
              children: [
                {
                  name: '实施损耗',
                  value: '6.65kW',
                  isShow: true,
                },
                {
                  name: '当日损耗',
                  value: '16.55kWh',
                  isShow: true,
                },
                {
                  name: '当月损耗',
                  value: '2194.4kVA',
                  isShow: false,
                },
              ],
              span: 12,
            },
            {
              title: '电流',
              children: [
                {
                  name: 'A相',
                  value: '66.65A',
                  isShow: true,
                },
                {
                  name: 'B相',
                  value: '64.42A',
                  isShow: true,
                },
                {
                  name: 'C相',
                  value: '66.42A',
                  isShow: false,
                },
              ],
              span: 12,
            },
            {
              title: '电压',
              children: [
                {
                  name: 'Uab',
                  value: '10.15kV',
                  isShow: true,
                },
                {
                  name: 'Ubc',
                  value: '10.1kV',
                  isShow: true,
                },
                {
                  name: 'Ubc',
                  value: '15.1kV',
                  isShow: false,
                },
              ],
              span: 12,
            },
          ],
        },
        {
          highPressureList: [
            {
              cardName: '高压设备4',
              title: '',
              children: [
                {
                  name: '负载率',
                  value: '40.75',
                  isShow: true,
                },
                {
                  name: '功率因数',
                  value: '0.81',
                  isShow: true,
                },
                {
                  name: '额定容量',
                  value: '8400kVA',
                  isShow: false,
                },
              ],
            },
            {
              title: '负载',
              children: [
                {
                  name: '有功',
                  value: '163kW',
                  isShow: true,
                },
                {
                  name: '无功',
                  value: '-321kVar',
                  isShow: true,
                },
                {
                  name: '视在',
                  value: '1994.4kVA',
                  isShow: false,
                },
              ],
              span: 12,
            },
            {
              title: '损耗',
              children: [
                {
                  name: '实施损耗',
                  value: '6.65kW',
                  isShow: true,
                },
                {
                  name: '当日损耗',
                  value: '16.55kWh',
                  isShow: true,
                },
                {
                  name: '当月损耗',
                  value: '2194.4kVA',
                  isShow: false,
                },
              ],
              span: 12,
            },
            {
              title: '电流',
              children: [
                {
                  name: 'A相',
                  value: '66.65A',
                  isShow: true,
                },
                {
                  name: 'B相',
                  value: '64.42A',
                  isShow: true,
                },
                {
                  name: 'C相',
                  value: '66.42A',
                  isShow: false,
                },
              ],
              span: 12,
            },
            {
              title: '电压',
              children: [
                {
                  name: 'Uab',
                  value: '10.15kV',
                  isShow: true,
                },
                {
                  name: 'Ubc',
                  value: '10.1kV',
                  isShow: true,
                },
                {
                  name: 'Ubc',
                  value: '15.1kV',
                  isShow: false,
                },
              ],
              span: 12,
            },
          ],
        },
      ],

      capacitor: [
        {
          img: ON,
          value: '30',
          PrimaryName: '嘉德广场',
          SecondaryName: '电容柜',
          capacitorName: '1',
          currentState: 'ON',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: ON,
          value: '30',
          capacitorName: '2',
          currentState: 'ON',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: ON,
          value: '30',
          capacitorName: '3',
          currentState: 'ON',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: OFF,
          value: '30',
          capacitorName: '4',
          currentState: 'OFF',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: OFF,
          value: '30',
          capacitorName: '5',
          currentState: 'OFF',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: ON,
          value: '30',
          capacitorName: '6',
          currentState: 'ON',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: OFF,
          value: '30',
          capacitorName: '7',
          currentState: 'OFF',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
        {
          img: ON,
          value: '30',
          capacitorName: '8',
          currentState: 'ON',
          currentTemperature: '30°C',
          oneYearInvestment: '100.00%',
          oneYearSwitch: '0',
          threeMonthsInvestment: '100.00%',
          threeMonthsSwitch: '0',
          oneMonthsInvestment: '100.00%',
          oneMonthsSwitch: '0',
        },
      ],
    };
  },
});

export default useUserDataList;
