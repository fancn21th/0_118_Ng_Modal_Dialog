# ModalDialog

## Drag & Drop

- cdkDrag

  - make element draggable

- cdkDropList

  - wrap a list of cdkDrag

- cdkDropListDropped event

  - event: CdkDragDrop<string[]>
  - event.previousIndex, event.currentIndex

- moveItemInArray method

- cdkDropListConnectedTo

  - multiple cdkDropList
  - event: CdkDragDrop<string[]>
    - event.previousContainer === event.container

- transferArrayItem method
