/**
 * FIAP Checkpoint Tracker - Subjects Screen
 * 
 * Design: Corporate Minimalism
 * - Grid de disciplinas com cores únicas
 * - Exibição de professor e checkpoints
 * - Navegação para detalhes da disciplina
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { SUBJECTS, getCheckpointsBySubject } from '@/constants/checkpoints';
import { Users, BookOpen } from 'lucide-react-native';

interface SubjectCardProps {
  color: string;
  name: string;
  code: string;
  professor: string;
  checkpointCount: number;
  colorScheme: 'light' | 'dark';
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  color,
  name,
  code,
  professor,
  checkpointCount,
  colorScheme,
}) => {
  const colors = Colors[colorScheme];

  return (
    <TouchableOpacity
      style={[
        styles.subjectCard,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        },
      ]}
      activeOpacity={0.7}
    >
      {/* Cabeçalho colorido */}
      <View
        style={[
          styles.subjectHeader,
          {
            backgroundColor: color,
          },
        ]}
      >
        <Text style={styles.subjectCode}>{code}</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.subjectContent}>
        <Text
          style={[
            styles.subjectName,
            {
              color: colors.text,
            },
          ]}
          numberOfLines={2}
        >
          {name}
        </Text>

        <View style={styles.subjectInfo}>
          <Users size={14} color={colors.icon} />
          <Text
            style={[
              styles.professor,
              {
                color: colors.icon,
              },
            ]}
            numberOfLines={1}
          >
            {professor}
          </Text>
        </View>

        <View
          style={[
            styles.checkpointBadge,
            {
              backgroundColor: color + '20',
            },
          ]}
        >
          <BookOpen size={14} color={color} />
          <Text
            style={[
              styles.checkpointCount,
              {
                color: color,
              },
            ]}
          >
            {checkpointCount} checkpoint{checkpointCount !== 1 ? 's' : ''}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function SubjectsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const renderHeader = () => (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.primary,
        },
      ]}
    >
      <Text style={styles.headerTitle}>Disciplinas</Text>
      <Text style={styles.headerSubtitle}>
        {SUBJECTS.length} disciplinas cadastradas
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderHeader()}

        <View style={styles.gridContainer}>
          {SUBJECTS.map((subject) => {
            const checkpointCount = getCheckpointsBySubject(subject.id).length;
            return (
              <View key={subject.id} style={styles.gridItem}>
                <SubjectCard
                  color={subject.color}
                  name={subject.name}
                  code={subject.code}
                  professor={subject.professor}
                  checkpointCount={checkpointCount}
                  colorScheme={colorScheme ?? 'light'}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xl,
    borderBottomLeftRadius: BorderRadius.xl,
    borderBottomRightRadius: BorderRadius.xl,
    marginBottom: Spacing.lg,
  },
  headerTitle: {
    fontSize: FontSizes['2xl'],
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: Spacing.xs,
  },
  headerSubtitle: {
    fontSize: FontSizes.sm,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  gridContainer: {
    paddingHorizontal: Spacing.md,
  },
  gridItem: {
    marginBottom: Spacing.lg,
  },
  subjectCard: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subjectHeader: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectCode: {
    fontSize: FontSizes.xl,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subjectContent: {
    padding: Spacing.md,
  },
  subjectName: {
    fontSize: FontSizes.base,
    fontWeight: '600',
    marginBottom: Spacing.md,
  },
  subjectInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  professor: {
    fontSize: FontSizes.sm,
    marginLeft: Spacing.sm,
    flex: 1,
  },
  checkpointBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
  },
  checkpointCount: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    marginLeft: Spacing.sm,
  },
});
