<script setup lang="ts">
import { FlexRender } from '@tanstack/vue-table'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from '@/components/ui/table'

import type { Row, Table as TableT } from '@tanstack/vue-table'
import { getCoreRowModel, useVueTable, createColumnHelper } from '@tanstack/vue-table'
import { h, ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash, SquarePen } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t, d } = useI18n()
const defaultData: ProjectInfo[] = [
  {
    name: 'video_1',
    uuid: '4026a665-1ec2-4050-a0c8-e491470f24a2',
    createDate: new Date('2025-05-20T03:14:00'),
    status: 'finished',
  },
  {
    name: 'video_2',
    uuid: '26fc1977-c856-4477-b171-4132dad90e24',
    createDate: new Date('2025-05-20T03:20:00'),
    status: 'progressing',
  },
  {
    name: 'video_3',
    uuid: 'd2b4152a-36e3-4e76-9621-5801756b02ee',
    createDate: new Date('2025-05-20T03:20:00'),
    status: 'finished',
  },
  {
    name: 'video_4',
    uuid: '4eea898c-7c49-49ec-a72b-fe8f3254cf11',
    createDate: new Date('2025-05-20T05:04:00'),
    status: 'finished',
  },
]

const columnHelper = createColumnHelper<ProjectInfo>()

const columns = [
  {
    id: 'select',
    header: ({ table }: { table: TableT<ProjectInfo> }) =>
      h(Checkbox, {
        modelValue:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:modelValue': (value) => table.toggleAllPageRowsSelected(!!value),
        ariaLabel: t('select-all'),
      }),
    cell: ({ row }: { row: Row<ProjectInfo> }) =>
      h(Checkbox, {
        modelValue: row.getIsSelected(),
        'onUpdate:modelValue': (value) => row.toggleSelected(!!value),
        ariaLabel: t('select-row'),
      }),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor('name', {
    header: () => h('p', t('name')),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('uuid', {
    header: () => h('p', t('id')),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('createDate', {
    header: () => h('p', t('create-date')),
    cell: (info) => d(info.getValue(), 'standard'),
  }),
  columnHelper.accessor('status', {
    header: () => h('p', t('status')),
    cell: (info) => t(info.getValue()),
  }),
  {
    id: 'manage',
    header: () => h('p', t('manage')),
    cell: ({ row }: { row: Row<ProjectInfo> }) =>
      h('div', { class: 'flex space-x-2' }, [
        h(Button, { variant: 'outline', disabled: row.original.status === 'finished' }, () =>
          h(SquarePen),
        ),
        h(Button, { variant: 'outline' }, () => h(Trash)),
      ]),
    enableSorting: false,
    enableHiding: false,
  },
]

const data = ref(defaultData)

const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div class="flex w-full flex-col space-y-2">
    <div class="flex">
      <Button
        variant="destructive"
        class="ml-auto mr-2"
        :disabled="!(table.getIsSomePageRowsSelected() || table.getIsAllPageRowsSelected())"
      >
        <Trash />
        {{ $t('delete-selected') }}
      </Button>
    </div>

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow :data-state="row.getIsSelected() && 'selected'">
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TableCell>
              </TableRow>
            </template>
          </template>

          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<style></style>
