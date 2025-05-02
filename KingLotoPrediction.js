
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function KingLotoPrediction() {
  const [predicciones, setPredicciones] = useState([
    { centena: 7, fijo: 74, c1: 75, c2: 63 },
    { centena: 7, fijo: 74, c1: 44, c2: 63 },
    { centena: 7, fijo: 74, c1: 99, c2: 63 },
    { centena: 7, fijo: 74, c1: 83, c2: 63 },
    { centena: 7, fijo: 74, c1: 75, c2: 44 },
  ]);
  const [resultados, setResultados] = useState({
    fecha: "02-05-2025",
    centena: 7,
    fijo: 53,
    c1: 44,
    c2: 65,
  });

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>KingLoto Prediction</Text>

      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Predicciones del día</Text>
        {predicciones.map((p, idx) => (
          <View key={idx} style={{ marginTop: 10, padding: 10, backgroundColor: "#eee", borderRadius: 8 }}>
            <Text>Centena: {p.centena}</Text>
            <Text>Fijo: {p.fijo}</Text>
            <Text>Corridos: {p.c1} - {p.c2}</Text>
          </View>
        ))}
      </View>

      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Resultados oficiales</Text>
        <View style={{ marginTop: 10, padding: 10, backgroundColor: "#eee", borderRadius: 8 }}>
          <Text>Fecha: {resultados.fecha}</Text>
          <Text>Centena: {resultados.centena}</Text>
          <Text>Fijo: {resultados.fijo}</Text>
          <Text>Corridos: {resultados.c1} - {resultados.c2}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
