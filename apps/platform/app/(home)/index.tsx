import Cases from "@/components/home/cases";
import Header from "@/components/layout/Header";
import SupportButton from "@/components/layout/SupportButton";
import { Text } from "@/components/ui/text";
import { useFormatMessage } from "@/hooks/intl";
import { View } from "react-native";

export default function Index() {
  const intl = useFormatMessage();

  return (
    <View className="flex-1 relative flex gap-5 py-16 px-2">
      <Header />
      <Text className="text-center text-3xl text-primary">
        {intl("home.verse")}{" "}
      </Text>
      <Cases />
      <SupportButton />
    </View>
  );
}
