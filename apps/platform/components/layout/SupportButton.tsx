import { useCallback } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { Text } from '../ui/text';

const SupportButton: React.FC = () => {
  const goToSupport = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=+201018303125`);
  }, []);
  return (
    <TouchableOpacity
      className="px-2 py-4 bg-green-600 flex items-center justify-center w-1/3 absolute bottom-1/4 rounded-r-full "
      onPress={goToSupport}
    >
      <Text>Need Help?</Text>
    </TouchableOpacity>
  );
};

export default SupportButton;
