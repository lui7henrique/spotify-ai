import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { TimeRange } from '@/types/time-range'

const timeRangesOptions: Array<{
  value: TimeRange
  label: string
}> = [
  {
    value: 'short_term',
    label: 'Short (4 weeks)',
  },
  {
    value: 'medium_term',
    label: 'Medium (6 months)',
  },
  {
    value: 'long_term',
    label: 'Long (all time)',
  },
]

type TimeRangeDropdownProps = {
  selectedTimeRange: TimeRange
  handleSelectTimeRange: (timeRange: TimeRange) => void
}

export const TimeRangeDropdown = ({
  handleSelectTimeRange,
  selectedTimeRange,
}: TimeRangeDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex">
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          Time-range
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-fit">
        <DropdownMenuLabel>Change time-range</DropdownMenuLabel>

        <DropdownMenuSeparator />

        {timeRangesOptions.map((timeRange) => {
          return (
            <DropdownMenuCheckboxItem
              key={timeRange.value}
              className="whitespace-nowrap"
              checked={selectedTimeRange === timeRange.value}
              onCheckedChange={() => handleSelectTimeRange(timeRange.value)}
            >
              {timeRange.label}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
