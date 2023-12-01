<template>
  <div id="container">
    <div id="graph"></div>
  </div>
</template>

//
<script lang="ts" setup>
  // import { ref, onMounted } from "vue";
  // import { Graph, Shape } from '@antv/x6'
  // import { Stencil } from '@antv/x6-plugin-stencil'
  // import { Transform } from '@antv/x6-plugin-transform'
  // import { Selection } from '@antv/x6-plugin-selection'
  // import { Snapline } from '@antv/x6-plugin-snapline'
  // import { Keyboard } from '@antv/x6-plugin-keyboard'
  // import { Clipboard } from '@antv/x6-plugin-clipboard'
  // import { History } from '@antv/x6-plugin-history'
  // import insertCss from 'insert-css'

  // // 为了协助代码演示
  // preWork()

  // onMounted(() => {
  //   // #region 初始化画布
  // const graph = new Graph({
  //   container: document.getElementById('graph-container')!,
  //   grid: true,
  //   mousewheel: {
  //     enabled: true,
  //     zoomAtMousePosition: true,
  //     modifiers: 'ctrl',
  //     minScale: 0.5,
  //     maxScale: 3,
  //   },
  //   connecting: {
  //     router: 'manhattan',
  //     connector: {
  //       name: 'rounded',
  //       args: {
  //         radius: 8,
  //       },
  //     },
  //     anchor: 'center',
  //     connectionPoint: 'anchor',
  //     allowBlank: false,
  //     snap: {
  //       radius: 20,
  //     },
  //     createEdge() {
  //       return new Shape.Edge({
  //         attrs: {
  //           line: {
  //             stroke: '#A2B1C3',
  //             strokeWidth: 2,
  //             targetMarker: {
  //               name: 'block',
  //               width: 12,
  //               height: 8,
  //             },
  //           },
  //         },
  //         zIndex: 0,
  //       })
  //     },
  //     validateConnection({ targetMagnet }) {
  //       return !!targetMagnet
  //     },
  //   },
  //   highlighting: {
  //     magnetAdsorbed: {
  //       name: 'stroke',
  //       args: {
  //         attrs: {
  //           fill: '#5F95FF',
  //           stroke: '#5F95FF',
  //         },
  //       },
  //     },
  //   },
  // })
  // // #endregion

  // // #region 使用插件
  // graph
  //   .use(
  //     new Transform({
  //       resizing: true,
  //       rotating: true,
  //     }),
  //   )
  //   .use(
  //     new Selection({
  //       rubberband: true,
  //       showNodeSelectionBox: true,
  //     }),
  //   )
  //   .use(new Snapline())
  //   .use(new Keyboard())
  //   .use(new Clipboard())
  //   .use(new History())
  // // #endregion

  // // #region 初始化 stencil
  // const stencil = new Stencil({
  //   title: '流程图',
  //   target: graph,
  //   stencilGraphWidth: 200,
  //   stencilGraphHeight: 180,
  //   collapsable: true,
  //   groups: [
  //     {
  //       title: '基础流程图',
  //       name: 'group1',
  //     },
  //     {
  //       title: '系统设计图',
  //       name: 'group2',
  //       graphHeight: 250,
  //       layoutOptions: {
  //         rowHeight: 70,
  //       },
  //     },
  //   ],
  //   layoutOptions: {
  //     columns: 2,
  //     columnWidth: 80,
  //     rowHeight: 55,
  //   },
  // })
  // document.getElementById('stencil')!.appendChild(stencil.container)
  // // #endregion

  // // #region 快捷键与事件
  // graph.bindKey(['meta+c', 'ctrl+c'], () => {
  //   const cells = graph.getSelectedCells()
  //   if (cells.length) {
  //     graph.copy(cells)
  //   }
  //   return false
  // })
  // graph.bindKey(['meta+x', 'ctrl+x'], () => {
  //   const cells = graph.getSelectedCells()
  //   if (cells.length) {
  //     graph.cut(cells)
  //   }
  //   return false
  // })
  // graph.bindKey(['meta+v', 'ctrl+v'], () => {
  //   if (!graph.isClipboardEmpty()) {
  //     const cells = graph.paste({ offset: 32 })
  //     graph.cleanSelection()
  //     graph.select(cells)
  //   }
  //   return false
  // })

  // // undo redo
  // graph.bindKey(['meta+z', 'ctrl+z'], () => {
  //   if (graph.canUndo()) {
  //     graph.undo()
  //   }
  //   return false
  // })
  // graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
  //   if (graph.canRedo()) {
  //     graph.redo()
  //   }
  //   return false
  // })

  // // select all
  // graph.bindKey(['meta+a', 'ctrl+a'], () => {
  //   const nodes = graph.getNodes()
  //   if (nodes) {
  //     graph.select(nodes)
  //   }
  // })

  // // delete
  // graph.bindKey('backspace', () => {
  //   const cells = graph.getSelectedCells()
  //   if (cells.length) {
  //     graph.removeCells(cells)
  //   }
  // })

  // // zoom
  // graph.bindKey(['ctrl+1', 'meta+1'], () => {
  //   const zoom = graph.zoom()
  //   if (zoom < 1.5) {
  //     graph.zoom(0.1)
  //   }
  // })
  // graph.bindKey(['ctrl+2', 'meta+2'], () => {
  //   const zoom = graph.zoom()
  //   if (zoom > 0.5) {
  //     graph.zoom(-0.1)
  //   }
  // })

  // // 控制连接桩显示/隐藏
  // const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
  //   for (let i = 0, len = ports.length; i < len; i += 1) {
  //     ports[i].style.visibility = show ? 'visible' : 'hidden'
  //   }
  // }
  // graph.on('node:mouseenter', () => {
  //   const container = document.getElementById('graph-container')!
  //   const ports = container.querySelectorAll(
  //     '.x6-port-body',
  //   ) as NodeListOf<SVGElement>
  //   showPorts(ports, true)
  // })
  // graph.on('node:mouseleave', () => {
  //   const container = document.getElementById('graph-container')!
  //   const ports = container.querySelectorAll(
  //     '.x6-port-body',
  //   ) as NodeListOf<SVGElement>
  //   showPorts(ports, false)
  // })
  // // #endregion

  // // #region 初始化图形
  // const ports = {
  //   groups: {
  //     top: {
  //       position: 'top',
  //       attrs: {
  //         circle: {
  //           r: 4,
  //           magnet: true,
  //           stroke: '#5F95FF',
  //           strokeWidth: 1,
  //           fill: '#fff',
  //           style: {
  //             visibility: 'hidden',
  //           },
  //         },
  //       },
  //     },
  //     right: {
  //       position: 'right',
  //       attrs: {
  //         circle: {
  //           r: 4,
  //           magnet: true,
  //           stroke: '#5F95FF',
  //           strokeWidth: 1,
  //           fill: '#fff',
  //           style: {
  //             visibility: 'hidden',
  //           },
  //         },
  //       },
  //     },
  //     bottom: {
  //       position: 'bottom',
  //       attrs: {
  //         circle: {
  //           r: 4,
  //           magnet: true,
  //           stroke: '#5F95FF',
  //           strokeWidth: 1,
  //           fill: '#fff',
  //           style: {
  //             visibility: 'hidden',
  //           },
  //         },
  //       },
  //     },
  //     left: {
  //       position: 'left',
  //       attrs: {
  //         circle: {
  //           r: 4,
  //           magnet: true,
  //           stroke: '#5F95FF',
  //           strokeWidth: 1,
  //           fill: '#fff',
  //           style: {
  //             visibility: 'hidden',
  //           },
  //         },
  //       },
  //     },
  //   },
  //   items: [
  //     {
  //       group: 'top',
  //     },
  //     {
  //       group: 'right',
  //     },
  //     {
  //       group: 'bottom',
  //     },
  //     {
  //       group: 'left',
  //     },
  //   ],
  // }

  // Graph.registerNode(
  //   'custom-rect',
  //   {
  //     inherit: 'rect',
  //     width: 66,
  //     height: 36,
  //     attrs: {
  //       body: {
  //         strokeWidth: 1,
  //         stroke: '#5F95FF',
  //         fill: '#EFF4FF',
  //       },
  //       text: {
  //         fontSize: 12,
  //         fill: '#262626',
  //       },
  //     },
  //     ports: { ...ports },
  //   },
  //   true,
  // )

  // Graph.registerNode(
  //   'custom-polygon',
  //   {
  //     inherit: 'polygon',
  //     width: 66,
  //     height: 36,
  //     attrs: {
  //       body: {
  //         strokeWidth: 1,
  //         stroke: '#5F95FF',
  //         fill: '#EFF4FF',
  //       },
  //       text: {
  //         fontSize: 12,
  //         fill: '#262626',
  //       },
  //     },
  //     ports: {
  //       ...ports,
  //       items: [
  //         {
  //           group: 'top',
  //         },
  //         {
  //           group: 'bottom',
  //         },
  //       ],
  //     },
  //   },
  //   true,
  // )

  // Graph.registerNode(
  //   'custom-circle',
  //   {
  //     inherit: 'circle',
  //     width: 45,
  //     height: 45,
  //     attrs: {
  //       body: {
  //         strokeWidth: 1,
  //         stroke: '#5F95FF',
  //         fill: '#EFF4FF',
  //       },
  //       text: {
  //         fontSize: 12,
  //         fill: '#262626',
  //       },
  //     },
  //     ports: { ...ports },
  //   },
  //   true,
  // )

  // Graph.registerNode(
  //   'custom-image',
  //   {
  //     inherit: 'rect',
  //     width: 52,
  //     height: 52,
  //     markup: [
  //       {
  //         tagName: 'rect',
  //         selector: 'body',
  //       },
  //       {
  //         tagName: 'image',
  //       },
  //       {
  //         tagName: 'text',
  //         selector: 'label',
  //       },
  //     ],
  //     attrs: {
  //       body: {
  //         stroke: '#5F95FF',
  //         fill: '#5F95FF',
  //       },
  //       image: {
  //         width: 26,
  //         height: 26,
  //         refX: 13,
  //         refY: 16,
  //       },
  //       label: {
  //         refX: 3,
  //         refY: 2,
  //         textAnchor: 'left',
  //         textVerticalAnchor: 'top',
  //         fontSize: 12,
  //         fill: '#fff',
  //       },
  //     },
  //     ports: { ...ports },
  //   },
  //   true,
  // )

  // const r1 = graph.createNode({
  //   shape: 'custom-rect',
  //   label: '开始',
  //   attrs: {
  //     body: {
  //       rx: 20,
  //       ry: 26,
  //     },
  //   },
  // })
  // const r2 = graph.createNode({
  //   shape: 'custom-rect',
  //   label: '过程',
  // })
  // const r3 = graph.createNode({
  //   shape: 'custom-rect',
  //   attrs: {
  //     body: {
  //       rx: 6,
  //       ry: 6,
  //     },
  //   },
  //   label: '可选过程',
  // })
  // const r4 = graph.createNode({
  //   shape: 'custom-polygon',
  //   attrs: {
  //     body: {
  //       refPoints: '0,10 10,0 20,10 10,20',
  //     },
  //   },
  //   label: '决策',
  // })
  // const r5 = graph.createNode({
  //   shape: 'custom-polygon',
  //   attrs: {
  //     body: {
  //       refPoints: '10,0 40,0 30,20 0,20',
  //     },
  //   },
  //   label: '数据',
  // })
  // const r6 = graph.createNode({
  //   shape: 'custom-circle',
  //   label: '连接',
  // })
  // stencil.load([r1, r2, r3, r4, r5, r6], 'group1')

  // const imageShapes = [
  //   {
  //     label: 'Client',
  //     image:
  //       'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
  //   },
  //   {
  //     label: 'Http',
  //     image:
  //       'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
  //   },
  //   {
  //     label: 'Api',
  //     image:
  //       'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
  //   },
  //   {
  //     label: 'Sql',
  //     image:
  //       'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
  //   },
  //   {
  //     label: 'Clound',
  //     image:
  //       'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
  //   },
  //   {
  //     label: 'Mq',
  //     image:
  //       'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
  //   },
  // ]
  // const imageNodes = imageShapes.map((item) =>
  //   graph.createNode({
  //     shape: 'custom-image',
  //     label: item.label,
  //     attrs: {
  //       image: {
  //         'xlink:href': item.image,
  //       },
  //     },
  //   }),
  // )
  // stencil.load(imageNodes, 'group2')
  // });

  // onMounted(() => {
  //   const w = document.getElementById("container");
  //   console.log(w.clientWidth, w.clientHeight);
  //   // 定制节点
  //   Graph.registerNode(
  //     "blueLine",
  //     {
  //       inherit: "rect",
  //       width: 120,
  //       height: 20,
  //       attrs: {
  //         body: {
  //           stroke: "black",
  //           strokeWidth: 1,
  //           fill: "blue",
  //         },
  //       },
  //     },
  //     true
  //   );
  //   const graph = new Graph({
  //     container: document.getElementById("graph"),
  //     autoResize: true,
  //     width: w.clientWidth,
  //     height: w.clientHeight,
  //     background: {
  //       color: "#000000",
  //     },
  //     connecting: {
  //       allowNode: false,
  //       allowBlank: false,
  //       highlight: true,
  //       createEdge() {
  //         return this.createEdge({
  //           attrs: {
  //             line: {
  //               stroke: "#8f8f8f",
  //               strokeWidth: 1,
  //             },
  //           },
  //         });
  //       },
  //     },
  //     // 移动画板
  //     panning: true,
  //     // 滚轮放大缩小
  //     mousewheel: {
  //       enabled: true,
  //       modifiers: "Ctrl",
  //     },
  //     // highlighting: {
  //     //   // 连接桩可以被连接时在连接桩外围围渲染一个包围框
  //     //   magnetAvailable: {
  //     //     name: "stroke",
  //     //     args: {
  //     //       attrs: {
  //     //         fill: "#fff",
  //     //         stroke: "#A4DEB1",
  //     //         strokeWidth: 4,
  //     //       },
  //     //     },
  //     //   },
  //     //   // 连接桩吸附连线时在连接桩外围围渲染一个包围框
  //     //   magnetAdsorbed: {
  //     //     name: "stroke",
  //     //     args: {
  //     //       attrs: {
  //     //         fill: "#fff",
  //     //         stroke: "#31d0c6",
  //     //         strokeWidth: 4,
  //     //       },
  //     //     },
  //     //   },
  //     // },
  //   });

  //   // 节点
  //   graph.addNode({
  //     x: 100,
  //     y: 260,
  //     markup: [
  //       {
  //         tagName: "g",
  //         children: [
  //           {
  //             tagName: "rect",
  //             groupSelector: "line",
  //           },
  //         ],
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 40,
  //         height: 1,
  //         stroke: "#826f34",
  //       },
  //     },
  //   });
  //   graph.addNode({
  //     x: 105,
  //     y: 270,
  //     markup: [
  //       {
  //         tagName: "g",
  //         children: [
  //           {
  //             tagName: "rect",
  //             groupSelector: "line",
  //           },
  //         ],
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 30,
  //         height: 1,
  //         stroke: "#826f34",
  //       },
  //     },
  //   });
  //   graph.addNode({
  //     x: 110,
  //     y: 280,
  //     markup: [
  //       {
  //         tagName: "g",
  //         children: [
  //           {
  //             tagName: "rect",
  //             groupSelector: "line",
  //           },
  //         ],
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 20,
  //         height: 1,
  //         stroke: "#826f34",
  //       },
  //     },
  //   });
  //   // 自定义线
  //   graph.addNode({
  //     x: 120,
  //     y: 208,
  //     markup: [
  //       {
  //         tagName: "g",
  //         children: [
  //           {
  //             tagName: "rect",
  //             groupSelector: "line",
  //           },
  //         ],
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 1,
  //         height: 50,
  //         stroke: "#ffb570",
  //       },
  //     },
  //   });
  //   // 平行线
  //   graph.addNode({
  //     x: 120,
  //     y: 208,
  //     markup: [
  //       {
  //         tagName: "g",
  //         children: [
  //           {
  //             tagName: "rect",
  //             groupSelector: "line",
  //           },
  //         ],
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 50,
  //         height: 1,
  //         stroke: "#ffb570",
  //       },
  //     },
  //   });
  //   // 三等分圆
  //   graph.addNode({
  //     shape: "circle",
  //     x: 170,
  //     y: 180,
  //     width: 60,
  //     height: 60,
  //     attrs: {
  //       body: {
  //         fill: "black",
  //         stroke: "#ffb570",
  //       },
  //     },
  //   });
  //   // 左斜120度斜线
  //   graph.addNode({
  //     x: 200,
  //     y: 208,
  //     markup: [
  //       {
  //         tagName: "rect",
  //         selector: "switch",
  //         groupSelector: "line",
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 1,
  //         height: 28,
  //         stroke: "#ffb570",
  //       },
  //     },
  //     angle: 120,
  //   });
  //   graph.addNode({
  //     x: 200,
  //     y: 210,
  //     markup: [
  //       {
  //         tagName: "rect",
  //         selector: "switch",
  //         groupSelector: "line",
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 1,
  //         height: 28,
  //         stroke: "#ffb570",
  //       },
  //     },
  //   });
  //   // 右斜120
  //   graph.addNode({
  //     x: 200,
  //     y: 208,
  //     markup: [
  //       {
  //         tagName: "rect",
  //         selector: "switch",
  //         groupSelector: "line",
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 1,
  //         height: 28,
  //         stroke: "#ffb570",
  //       },
  //     },
  //     angle: -120,
  //   });
  //   // 圆
  //   graph.addNode({
  //     shape: "circle",
  //     x: 170,
  //     y: 242,
  //     width: 60,
  //     height: 60,
  //     attrs: {
  //       body: {
  //         fill: "black",
  //         stroke: "#66ff66",
  //       },
  //     },
  //   });
  //   // 圆内的三角形
  //   graph.addNode({
  //     shape: "path",
  //     x: 184,
  //     y: 254,
  //     width: 32,
  //     height: 32,
  //     // https://www.svgrepo.com/svg/13653/like
  //     path:
  //       "M30.65 27.75l-14.001-24.249c-0.142-0.211-0.379-0.349-0.649-0.349s-0.508 0.137-0.648 0.346l-0.002 0.003-14 24.249c-0.063 0.108-0.1 0.237-0.1 0.375 0 0.414 0.336 0.75 0.75 0.75h28c0 0 0.001 0 0.001 0 0.414 0 0.75-0.336 0.75-0.75 0-0.138-0.037-0.267-0.102-0.379l0.002 0.004zM3.299 27.375l12.701-21.999 12.701 21.999z",
  //     attrs: {
  //       body: {
  //         fill: "#66ff66",
  //         stroke: "none",
  //       },
  //     },
  //   });
  //   // 垂直线
  //   graph.addNode({
  //     x: 200,
  //     y: 304,
  //     markup: [
  //       {
  //         tagName: "rect",
  //         selector: "switch",
  //         groupSelector: "line",
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 1,
  //         height: 200,
  //         stroke: "#66ff66",
  //       },
  //     },
  //   });
  //   // 倒三角
  //   graph.addNode({
  //     shape: "path",
  //     x: 184,
  //     y: 340,
  //     width: 32,
  //     height: 70,
  //     // https://www.svgrepo.com/svg/13653/like
  //     path:
  //       "M30.65 27.75l-14.001-24.249c-0.142-0.211-0.379-0.349-0.649-0.349s-0.508 0.137-0.648 0.346l-0.002 0.003-14 24.249c-0.063 0.108-0.1 0.237-0.1 0.375 0 0.414 0.336 0.75 0.75 0.75h28c0 0 0.001 0 0.001 0 0.414 0 0.75-0.336 0.75-0.75 0-0.138-0.037-0.267-0.102-0.379l0.002 0.004zM3.299 27.375l12.701-21.999 12.701 21.999z",
  //     attrs: {
  //       body: {
  //         fill: "#66ff66",
  //         stroke: "none",
  //       },
  //     },
  //     angle: 180,
  //   });
  //   graph.addNode({
  //     x: 160,
  //     y: 500,
  //     width: 80,
  //     height: 20,
  //     label: "2#变压器进线",
  //     attrs: {
  //       body: {
  //         fill: "black",
  //         stroke: "none",
  //       },
  //       text: {
  //         fill: "white",
  //       },
  //     },
  //   });
  //   graph.addNode({
  //     x: 200,
  //     y: 98,
  //     markup: [
  //       {
  //         tagName: "rect",
  //         selector: "switch",
  //         groupSelector: "line",
  //       },
  //     ],
  //     attrs: {
  //       line: {
  //         width: 1,
  //         height: 80,
  //         stroke: "#66ff66",
  //       },
  //     },
  //   });
  //   // 普通方块
  //   graph.addNode({
  //     x: 240,
  //     y: 40,
  //     width: 30,
  //     height: 20,
  //     label: "2B",
  //     attrs: {
  //       body: {
  //         fill: "blue",
  //         stroke: "white",
  //       },
  //     },
  //   });
  //   // 共享样式蓝线
  //   graph.addNode({
  //     shape: "blueLine",
  //     x: 340,
  //     y: 40,
  //     label: "hello",
  //   });
  // });
  //
</script>

<style scoped>
  /* // html,
  // body {
  //   height: 100%;
  // }
  // .arco-layout-content div {
  //   height: 100% !important;
  // }
  // */
</style>
