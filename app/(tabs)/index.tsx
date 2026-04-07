/**
 * FIAP Checkpoint Tracker - Home Screen
 * 
 * Design: Corporate Minimalism
 * - Header com logo FIAP e título
 * - Lista de checkpoints próximos
 * - Feedback visual de urgência
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { CHECKPOINTS, sortCheckpointsByDate } from '@/constants/checkpoints';
import { CheckpointCard } from '@/components/CheckpointCard';
import { CheckpointCalendar } from '@/components/CheckpointCalendar';
import { Calendar } from 'lucide-react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [refreshing, setRefreshing] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const sortedCheckpoints = sortCheckpointsByDate(CHECKPOINTS);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simular carregamento
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderHeader = () => (
    <View
      style={[
        styles.header,
        {
          backgroundColor: '#2a2a2a',
        },
      ]}
    >
      {/* Logo e Título */}
      <View style={styles.headerContent}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663122670232/HgSZo4zUMXRCXeLStHkvT2/fiap-logo-new_3447e711.png',
            }}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.mainTitle, { color: '#FFFFFF' }]}>Checkpoint Tracker</Text>
          <Text style={[styles.subtitle, { color: '#CCCCCC' }]}>Acompanhe seus checkpoints</Text>
        </View>
      </View>

      {/* Estatísticas */}
      <TouchableOpacity
        style={styles.stats}
        onPress={() => setShowCalendar(true)}
        activeOpacity={0.7}
      >
        <View style={styles.statItem}>
          <Calendar size={20} color={colors.primary} />
          <Text style={[styles.statText, { color: '#FFFFFF' }]}>{sortedCheckpoints.length} checkpoints</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Calendar size={48} color={colors.icon} />
      <Text
        style={[
          styles.emptyStateTitle,
          {
            color: colors.text,
          },
        ]}
      >
        Nenhum checkpoint encontrado
      </Text>
      <Text
        style={[
          styles.emptyStateSubtitle,
          {
            color: colors.icon,
          },
        ]}
      >
        Seus checkpoints aparecerão aqui
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <FlatList
        data={sortedCheckpoints}
        renderItem={({ item }) => (
          <CheckpointCard checkpoint={item} colorScheme={colorScheme ?? 'light'} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
      />

      {/* Modal de Calendário */}
      <Modal
        visible={showCalendar}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowCalendar(false)}
      >
        <CheckpointCalendar onClose={() => setShowCalendar(false)} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: Spacing.xl,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xl,
    borderBottomLeftRadius: BorderRadius.xl,
    borderBottomRightRadius: BorderRadius.xl,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  logoContainer: {
    marginRight: Spacing.lg,
  },
  logoImage: {
    width: 60,
    height: 40,
  },
  titleContainer: {
    flex: 1,
  },
  mainTitle: {
    fontSize: FontSizes['2xl'],
    fontWeight: '700',
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSizes.sm,
    opacity: 0.9,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(233, 30, 99, 0.15)',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
  },
  statText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    marginLeft: Spacing.sm,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  emptyStateTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    marginTop: Spacing.lg,
  },
  emptyStateSubtitle: {
    fontSize: FontSizes.sm,
    marginTop: Spacing.sm,
  },
});
