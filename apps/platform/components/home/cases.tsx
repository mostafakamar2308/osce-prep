import { Text } from '@/components/ui/text';
import { useFormatMessage } from '@/hooks/intl';
import { LocalId } from '@/locales';
import { ICase } from '@med-simulate/types';
import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Badge } from '../ui/badge';

const cases: ICase.Self[] = [
  {
    id: '1',
    category: ICase.CaseCategory.ER,
    speciality: ICase.CaseSpeciality.Pediatrics,
    complaint: 'Diarrhea for 2 days',
    title: 'Diarrhea',
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '2',
    category: ICase.CaseCategory.ER,
    speciality: ICase.CaseSpeciality.Pediatrics,
    complaint: 'Breathing Difficulty for 2 days',
    title: 'Respiratory System',
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '3',
    category: ICase.CaseCategory.ER,
    speciality: ICase.CaseSpeciality.Pediatrics,
    complaint: 'Sore Throat for 3 days',
    title: 'Sore Throat',
    createdAt: '',
    updatedAt: '',
  },
];

const Cases = () => {
  const intl = useFormatMessage();
  return (
    <View className="flex-1">
      <Text variant="h2" className="text-2xl text-right">
        {intl('home.cases.title')}
      </Text>
      <View className="flex flex-1 gap-4">
        {cases.map((element) => (
          <IndividualCase key={element.id} individualCase={element} />
        ))}
      </View>
    </View>
  );
};

const IndividualCase: React.FC<{ individualCase: ICase.Self }> = ({
  individualCase,
}) => {
  return (
    <TouchableOpacity className="p-4 bg-chart-primary shadow-md border border-chart-primary flex flex-col gap-2 rounded-lg">
      <Text variant="h4" className="font-bold">
        {individualCase.title}
      </Text>
      <View className="flex w-1/2 flex-row gap-2">
        <SpecialityBadge speciality={individualCase.speciality} />
        <CategoryBadge category={individualCase.category} />
      </View>
    </TouchableOpacity>
  );
};

const SpecialityBadge: React.FC<{ speciality: ICase.CaseSpeciality }> = ({
  speciality,
}) => {
  const intl = useFormatMessage();
  const specialityMap: Record<ICase.CaseSpeciality, LocalId> = useMemo(
    () => ({
      [ICase.CaseSpeciality.IM]: 'speciality.im',
      [ICase.CaseSpeciality.Pediatrics]: 'speciality.pediatrics',
      [ICase.CaseSpeciality.OBGYN]: 'speciality.obgyn',
    }),
    [],
  );

  return (
    <Badge className="bg-sky-500 py-1">
      <Text className="text-white">{intl(specialityMap[speciality])}</Text>
    </Badge>
  );
};

const CategoryBadge: React.FC<{ category: ICase.CaseCategory }> = ({
  category,
}) => {
  const intl = useFormatMessage();
  const categoryMap: Record<ICase.CaseCategory, LocalId> = useMemo(
    () => ({
      [ICase.CaseCategory.ER]: 'category.er',
      [ICase.CaseCategory.Inpatient]: 'category.inpatient',
      [ICase.CaseCategory.Outpatient]: 'category.outpatient',
    }),
    [],
  );

  return (
    <Badge className="bg-purple-500 py-1">
      <Text className="text-white">{intl(categoryMap[category])}</Text>
    </Badge>
  );
};

export default Cases;
