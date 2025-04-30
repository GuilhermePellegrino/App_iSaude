import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Steps = ({ steps, currentStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((label, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <View key={index} style={styles.stepContainer}>
            <View
              style={[
                styles.circle,
                isCompleted && styles.completedCircle,
                isActive && styles.activeCircle,
              ]}
            >
              <Text style={styles.stepText}>
                {isCompleted ? "✓" : index + 1}
              </Text>
            </View>
            <Text
              style={[
                styles.label,
                (isActive || isCompleted) && styles.activeLabel,
              ]}
            >
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  stepContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#D8DCE5",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  activeCircle: {
    backgroundColor: "#537EE9",
  },
  completedCircle: {
    backgroundColor: "#01AEA4",
  },
  stepText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    marginLeft: 8,
    marginRight: 16,
    color: "#aaa",
  },
  activeLabel: {
    color: "white",
  },
  line: {
    height: 2,
    width: 40,
    backgroundColor: "#D8DCE5",
    position: "absolute",
    left: 45,
    top: 16,
    zIndex: 0,
  },
  activeLine: {
    backgroundColor: "#537EE9",
  },
});
