import * as actions from '../../actions/todo'
import todos from './todos'

describe('todos reducer', () => {
    it('should handle ADD_TODO', () => {
        expect(
            todos([],actions.addTodo('Run the tests'))
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 1
            }
        ]);

        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }], actions.addTodo('Use Redux'))
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 1
            }, {
                text: 'Use Redux',
                completed: false,
                id: 2
            }
        ]);

        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 2
                }
            ], actions.addTodo('Fix the tests'))
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 1
            }, {
                text: 'Use Redux',
                completed: false,
                id: 2
            }, {
                text: 'Fix the tests',
                completed: false,
                id: 3
            }
        ])
    });

    it('should handle TOGGLE_TODO', () => {
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], actions.toggleTodo(1))
        ).toEqual([
            {
                text: 'Run the tests',
                completed: true,
                id: 1
            }, {
                text: 'Use Redux',
                completed: false,
                id: 0
            }
        ])
    })

})
