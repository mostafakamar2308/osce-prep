import logo from '@/assets/images/logo.png';
import { Text } from '@/components/ui/text';
import { useFormatMessage } from '@/hooks/intl';
import { Image, View } from 'react-native';

const Header = () => {
  const intl = useFormatMessage();

  return (
    <View className="flex flex-row items-center gap-3">
      <Image className="w-8 h-8" source={logo} />
      <Text variant={'h4'}>Med Simulate</Text>
    </View>
  );
};

export default Header;
