import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoDraftStore from '../data/TodoDraftStore';

function getStores() {
  return [
    TodoStore,
	TodoDraftStore,
  ];
}

function getState() {
  return {
  	todos: TodoStore.getState(),
  	draft: TodoDraftStore.getState(),

  	onAdd: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onUpdateDraft: TodoActions.updateDraft,
  };
}

export default Container.createFunctional(AppView, getStores, getState);