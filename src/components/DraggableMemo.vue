<script>
import draggable from 'vuedraggable';

export default {
    components: {
        draggable,
    },
    data: {
        Number: 0,
        items: [1, 2, 3],
    },
    methods: { //メソッズ（メソッドではないので注意）
        countUp: function () {
            this.number = this.number + 1
            // alert('test')
        }
    },
}
</script>

<template>
    <div>
        <draggable v-model="myArray" group="people" item-key="id">
            <!-- ドラッグ可能な要素のテンプレート -->
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </draggable>
    </div>
</template>