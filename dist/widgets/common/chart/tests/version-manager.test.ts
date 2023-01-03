import { Immutable } from 'jimu-core'
import { ByFieldSeriesX, ByFieldSeriesY } from '../src/constants'
import { buildUniqueQuery, setSeriesIdWithNumericField, versionManager } from '../src/version-manager'

let upgrader = null

describe('Version manager test', () => {
  describe('version 1.6.0', () => {
    beforeAll(() => {
      upgrader = versionManager.versions?.filter(function (version) {
        return version.version === '1.6.0'
      })[0]?.upgrader
    })
    it('should upgrade `multipleBarType` to `stackedType`', () => {
      const oldConfig = Immutable({
        webChart: {
          series: [{
            multipleBarType: 'sideBySide'
          }, {
            multipleBarType: 'stacked'
          }]
        }
      })
      const newConfig = upgrader(oldConfig)
      expect(newConfig).toEqual({
        webChart: {
          series: [{
            stackedType: 'sideBySide'
          }, {
            stackedType: 'stacked'
          }]
        }
      })
    })
  })
  describe('version 1.7.0', () => {
    describe('buildUniqueQuery', () => {
      it('by-group', () => {
        const series = Immutable([
          {
            query: {
              groupByFieldsForStatistics: ['category'],
              outStatistics: [
                {
                  onStatisticField: 'numeric0',
                  outStatisticFieldName: 'numeric0_sum',
                  statisticType: 'sum'
                }
              ]
            },
            id: 'numeric0_sum',
            x: 'category',
            y: 'numeric0_sum'
          },
          {
            query: {
              groupByFieldsForStatistics: ['category'],
              outStatistics: [
                {
                  onStatisticField: 'numeric1',
                  outStatisticFieldName: 'numeric1_sum',
                  statisticType: 'sum'
                }
              ]
            },
            id: 'numeric0_sum',
            x: 'category',
            y: 'numeric1_sum'
          }
        ]) as any
        expect(buildUniqueQuery(series)).toEqual({
          groupByFieldsForStatistics: ['category'],
          outStatistics: [
            {
              onStatisticField: 'numeric0',
              outStatisticFieldName: 'numeric0_sum',
              statisticType: 'sum'
            },
            {
              onStatisticField: 'numeric1',
              outStatisticFieldName: 'numeric1_sum',
              statisticType: 'sum'
            }
          ]
        })
      })
      it('by-field', () => {
        const series = Immutable([{
          query: {
            outStatistics: [
              {
                onStatisticField: 'numeric0',
                outStatisticFieldName: 'numeric0_sum',
                statisticType: 'sum'
              }, {
                onStatisticField: 'numeric1',
                outStatisticFieldName: 'numeric1_sum',
                statisticType: 'sum'
              }
            ]
          },
          id: ByFieldSeriesY,
          x: ByFieldSeriesY,
          y: ByFieldSeriesX
        }]) as any
        expect(buildUniqueQuery(series)).toEqual({
          outStatistics: [
            {
              onStatisticField: 'numeric0',
              outStatisticFieldName: 'numeric0_sum',
              statisticType: 'sum'
            },
            {
              onStatisticField: 'numeric1',
              outStatisticFieldName: 'numeric1_sum',
              statisticType: 'sum'
            }
          ]
        })
      })
    })

    describe('setSeriesIdWithNumericField', () => {
      it('by-group', () => {
        const series = Immutable([
          {
            query: {
              groupByFieldsForStatistics: ['category'],
              outStatistics: [
                {
                  onStatisticField: 'numeric0',
                  outStatisticFieldName: 'numeric0_sum',
                  statisticType: 'sum'
                }
              ]
            },
            id: 'numeric0_sum',
            x: 'category',
            y: 'numeric0_sum'
          },
          {
            query: {
              groupByFieldsForStatistics: ['category'],
              outStatistics: [
                {
                  onStatisticField: 'numeric1',
                  outStatisticFieldName: 'numeric1_sum',
                  statisticType: 'sum'
                }
              ]
            },
            id: 'numeric1_sum',
            x: 'category',
            y: 'numeric1_sum'
          }
        ]) as any
        expect(setSeriesIdWithNumericField(series)).toEqual([
          {
            query: {
              groupByFieldsForStatistics: ['category'],
              outStatistics: [
                {
                  onStatisticField: 'numeric0',
                  outStatisticFieldName: 'numeric0_sum',
                  statisticType: 'sum'
                }
              ]
            },
            id: 'numeric0',
            x: 'category',
            y: 'numeric0_sum'
          },
          {
            query: {
              groupByFieldsForStatistics: ['category'],
              outStatistics: [
                {
                  onStatisticField: 'numeric1',
                  outStatisticFieldName: 'numeric1_sum',
                  statisticType: 'sum'
                }
              ]
            },
            id: 'numeric1',
            x: 'category',
            y: 'numeric1_sum'
          }
        ])
      })
      it('by-field', () => {
        const series = Immutable([{
          query: {
            outStatistics: [
              {
                onStatisticField: 'numeric0',
                outStatisticFieldName: 'numeric0_sum',
                statisticType: 'sum'
              }, {
                onStatisticField: 'numeric1',
                outStatisticFieldName: 'numeric1_sum',
                statisticType: 'sum'
              }
            ]
          },
          id: ByFieldSeriesY,
          y: ByFieldSeriesX,
          x: ByFieldSeriesY
        }]) as any
        expect(setSeriesIdWithNumericField(series)).toEqual(series)
      })
    })
    describe('version 1.7.0', () => {
      beforeAll(() => {
        upgrader = versionManager.versions?.filter(function (version) {
          return version.version === '1.7.0'
        })[0]?.upgrader
      })
      it('should upgrade successfully for `by-group` mode', () => {
        const oldConfig = Immutable({
          webChart: {
            series: [
              {
                query: {
                  groupByFieldsForStatistics: ['category'],
                  outStatistics: [
                    {
                      onStatisticField: 'numeric0',
                      outStatisticFieldName: 'numeric0_sum',
                      statisticType: 'sum'
                    }
                  ]
                },
                id: 'numeric0_sum',
                x: 'category',
                y: 'numeric0_sum'
              },
              {
                query: {
                  groupByFieldsForStatistics: ['category'],
                  outStatistics: [
                    {
                      onStatisticField: 'numeric1',
                      outStatisticFieldName: 'numeric1_sum',
                      statisticType: 'sum'
                    }
                  ]
                },
                id: 'numeric1_sum',
                x: 'category',
                y: 'numeric1_sum'
              }
            ] as any
          }
        })
        const newConfig = upgrader(oldConfig)

        expect(newConfig).toEqual({
          webChart: {
            dataSource: {
              query: {
                groupByFieldsForStatistics: ['category'],
                outStatistics: [
                  {
                    onStatisticField: 'numeric0',
                    outStatisticFieldName: 'numeric0_sum',
                    statisticType: 'sum'
                  },
                  {
                    onStatisticField: 'numeric1',
                    outStatisticFieldName: 'numeric1_sum',
                    statisticType: 'sum'
                  }
                ]
              }
            },
            series: [
              {
                id: 'numeric0',
                x: 'category',
                y: 'numeric0_sum'
              },
              {
                id: 'numeric1',
                x: 'category',
                y: 'numeric1_sum'
              }
            ] as any
          }
        })
      })
      it('should upgrade successfully for `by-field` mode', () => {
        const oldConfig = Immutable({
          webChart: {
            series: [
              {
                query: {
                  outStatistics: [
                    {
                      onStatisticField: 'numeric0',
                      outStatisticFieldName: 'numeric0_sum',
                      statisticType: 'sum'
                    }, {
                      onStatisticField: 'numeric1',
                      outStatisticFieldName: 'numeric1_sum',
                      statisticType: 'sum'
                    }
                  ]
                },
                id: ByFieldSeriesY,
                y: ByFieldSeriesX,
                x: ByFieldSeriesY
              }
            ] as any
          }
        })
        const newConfig = upgrader(oldConfig)

        expect(newConfig).toEqual({
          webChart: {
            dataSource: {
              query: {
                outStatistics: [
                  {
                    onStatisticField: 'numeric0',
                    outStatisticFieldName: 'numeric0_sum',
                    statisticType: 'sum'
                  },
                  {
                    onStatisticField: 'numeric1',
                    outStatisticFieldName: 'numeric1_sum',
                    statisticType: 'sum'
                  }
                ]
              }
            },
            series: [
              {
                id: ByFieldSeriesY,
                y: ByFieldSeriesX,
                x: ByFieldSeriesY
              }
            ] as any
          }
        })
      })
    })
  })
  describe('version 1.10.0', () => {
    beforeAll(() => {
      upgrader = versionManager.versions?.filter(function (version) {
        return version.version === '1.10.0'
      })[0]?.upgrader
    })
    it('should upgrade `id`, `x`, `y` and `name` of series for by-field mode.', () => {
      const oldConfig = Immutable({
        webChart: {
          dataSource: {
            query: {
              outStatistics: [
                {
                  statisticType: 'min',
                  onStatisticField: 'Ward',
                  outStatisticFieldName: 'Ward_min'
                },
                {
                  statisticType: 'min',
                  onStatisticField: 'District',
                  outStatisticFieldName: 'District_min'
                }
              ]
            }
          },
          series: [
            {
              type: 'pieSeries',
              id: 'FieldValue',
              name: 'Sum of value',
              x: 'FieldName',
              y: 'FieldValue'
            }
          ]
        }
      })
      const newConfig = upgrader(oldConfig)
      expect(newConfig).toEqual({
        webChart: {
          dataSource: {
            query: {
              outStatistics: [
                {
                  statisticType: 'min',
                  onStatisticField: 'Ward',
                  outStatisticFieldName: 'Ward_min'
                },
                {
                  statisticType: 'min',
                  onStatisticField: 'District',
                  outStatisticFieldName: 'District_min'
                }
              ]
            }
          },
          series: [
            {
              type: 'pieSeries',
              id: 'value',
              name: 'Min of value',
              x: 'name',
              y: 'value'
            }
          ]
        }
      })
    })
    it('should upgrade `config.colorMatch` to `series[0].slices` for pie chart.', () => {
      const oldConfig = Immutable({
        webChart: {
          dataSource: {
            query: {
              groupByFieldsForStatistics: [
                'Year'
              ],
              outStatistics: [
                {
                  statisticType: 'count',
                  onStatisticField: 'FID',
                  outStatisticFieldName: 'FID_count'
                }
              ]
            },
            colorMatch: {
              configFields: {
                fillColor: '_fillColor'
              },
              colorMatches: {
                2011: {
                  _fillColor: '#77B484'
                },
                2012: {
                  _fillColor: '#DF6B35'
                },
                2013: {
                  _fillColor: '#DBCF4E'
                },
                2014: {
                  _fillColor: '#41546D'
                },
                2015: {
                  _fillColor: '#8257C2'
                },
                2016: {
                  _fillColor: '#D6558B'
                }
              }
            }
          },
          series: [
            {
              type: 'pieSeries',
              colorType: 'colorMatch',
              id: 'FID',
              name: 'FID',
              x: 'Year',
              y: 'FID_count',
              sliceGrouping: {
                percentageThreshold: 7,
                groupName: 'Other',
                fillSymbol: {
                  type: 'esriSFS',
                  style: 'esriSFSSolid',
                  color: 'var(--dark-800)',
                  outline: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: 'var(--light-900)',
                    width: 1
                  }
                }
              },
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: 'var(--dark-100)',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-900)',
                  width: 1
                }
              }
            }
          ]
        }
      })
      const newConfig = upgrader(oldConfig)
      expect(newConfig).toEqual({
        webChart: {
          dataSource: {
            query: {
              groupByFieldsForStatistics: [
                'Year'
              ],
              outStatistics: [
                {
                  statisticType: 'count',
                  onStatisticField: 'FID',
                  outStatisticFieldName: 'FID_count'
                }
              ]
            }
          },
          series: [
            {
              type: 'pieSeries',
              colorType: 'colorMatch',
              id: 'FID',
              name: 'FID',
              x: 'Year',
              y: 'FID_count',
              sliceGrouping: {
                percentageThreshold: 7,
                groupName: 'Other',
                fillSymbol: {
                  type: 'esriSFS',
                  style: 'esriSFSSolid',
                  color: 'var(--dark-800)',
                  outline: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: 'var(--light-900)',
                    width: 1
                  }
                }
              },
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: 'var(--dark-100)',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-900)',
                  width: 1
                }
              },
              slices: [
                {
                  sliceId: '2011',
                  fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#77B484',
                    outline: {
                      type: 'esriSLS',
                      style: 'esriSLSSolid',
                      color: 'var(--light-900)',
                      width: 1
                    }
                  }
                },
                {
                  sliceId: '2012',
                  fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#DF6B35',
                    outline: {
                      type: 'esriSLS',
                      style: 'esriSLSSolid',
                      color: 'var(--light-900)',
                      width: 1
                    }
                  }
                },
                {
                  sliceId: '2013',
                  fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#DBCF4E',
                    outline: {
                      type: 'esriSLS',
                      style: 'esriSLSSolid',
                      color: 'var(--light-900)',
                      width: 1
                    }
                  }
                },
                {
                  sliceId: '2014',
                  fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#41546D',
                    outline: {
                      type: 'esriSLS',
                      style: 'esriSLSSolid',
                      color: 'var(--light-900)',
                      width: 1
                    }
                  }
                },
                {
                  sliceId: '2015',
                  fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#8257C2',
                    outline: {
                      type: 'esriSLS',
                      style: 'esriSLSSolid',
                      color: 'var(--light-900)',
                      width: 1
                    }
                  }
                },
                {
                  sliceId: '2016',
                  fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#D6558B',
                    outline: {
                      type: 'esriSLS',
                      style: 'esriSLSSolid',
                      color: 'var(--light-900)',
                      width: 1
                    }
                  }
                }
              ]
            }
          ]
        }
      })
    })
  })
})
