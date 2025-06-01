export const nodeList: NodeGroup[] = [
  {
    name: 'core',
    require: ['vapoursynth'],
    color: '#0d72f3',
    initCode: ['core = vapoursynth.core'],
    use: 'core',
    nodeList: [
      {
        name: 'lsmas',
        code: 'lsmas.LWLibavSource({:in[0]}})',
        in: [['a']],
        params: {},
        out: 'a',
      },
    ],
  },
]
