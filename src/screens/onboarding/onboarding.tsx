import { SkipBtn } from '@/components/onboarding/SkipBtn'
import { lightColors } from '@/constants/COLORS'
import { onboardingSlides } from '@constants/onboarding/onboarding'
// import { useOnboardingStore } from '@/store/onboardingStore'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OnboardingScreen() {
  // const { completeOnboarding } = useOnboardingStore()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const currentSlide = onboardingSlides[currentSlideIndex]
  const isLastSlide = currentSlideIndex === onboardingSlides.length - 1

  const nextSlide = () => {
    if (currentSlideIndex < onboardingSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    } else {
      // completeOnboarding(true)
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <SkipBtn />

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Animated.View
              key={currentSlideIndex}
              entering={FadeIn.duration(500)}
              exiting={FadeOut.duration(300)}
              style={{ flex: 1 }}
            >
              {currentSlide.image}
            </Animated.View>
          </View>

          <Animated.View
            key={`text-${currentSlideIndex}`}
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(300)}
            style={{ flexDirection: 'column', gap: 16, marginBottom: 48 }}
          >
            <Text
              style={{
                color: lightColors.text,
                fontSize: 24,
                fontWeight: '600',
              }}
            >
              {currentSlide.title}
            </Text>

            <Text
              style={{
                color: lightColors.text,
                fontSize: 24,
                fontWeight: '600',
                marginTop: -8,
              }}
            >
              {currentSlide.secondTitle}
            </Text>
            <Text
              style={{
                color: lightColors.text,
                fontSize: 16,
                lineHeight: 24,
                opacity: 0.9,
              }}
            >
              {currentSlide.subTitle}
            </Text>
          </Animated.View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            {onboardingSlides.map((_, index) => (
              <Pressable
                key={index}
                onPress={() => setCurrentSlideIndex(index)}
                style={{
                  height: 8,
                  borderRadius: 10,
                  marginHorizontal: 4,
                  backgroundColor:
                    index === currentSlideIndex
                      ? lightColors.gradients.primary[0]
                      : lightColors.primary,
                  // opacity: index === currentSlideIndex ? 1 : 0.5,
                  width: index === currentSlideIndex ? 32 : 16,
                }}
              />
            ))}
          </View>
          <LinearGradient
            colors={lightColors.gradients.primary}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 10,
            }}
          >
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                paddingHorizontal: 24,
              }}
              onPress={nextSlide}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
                {isLastSlide ? 'Get Started' : 'Continue'}
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  )
}
