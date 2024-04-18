import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Part Time',
    'Full Time'
];

function getStyles(name: string, employmentType: string[], theme: Theme) {
  return {
    fontWeight:
      employmentType.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const EmploymentType = () => {
  const theme = useTheme();
  const [employmentType, setEmploymentType] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof employmentType>) => {
    const {
      target: { value },
    } = event;
    setEmploymentType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl sx={{ width: 1400, marginTop: '15px' }}>
    <InputLabel id="e-type">Employment Type</InputLabel>
    <Select
      labelId="e-type-label"
      id="etype-multiple-name"
      multiple
      value={employmentType}
      onChange={handleChange}
      input={<OutlinedInput label="Employment Type" />}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem
          key={name}
          value={name}
          style={getStyles(name, employmentType, theme)}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  );
}