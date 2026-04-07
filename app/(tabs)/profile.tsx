/**
 * FIAP Checkpoint Tracker - Profile Screen
 * 
 * Design: Corporate Minimalism
 * - Informações do usuário
 * - Estatísticas de checkpoints
 * - Configurações
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { CHECKPOINTS } from '@/constants/checkpoints';
import {
  User,
  CheckCircle2,
  Clock,
  AlertCircle,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react-native';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value, color }) => (
  <View style={styles.statItem}>
    <View
      style={[
        styles.statIcon,
        {
          backgroundColor: color + '20',
        },
      ]}
    >
      {icon}
    </View>
    <View style={styles.statContent}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  </View>
);

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  isDangerous?: boolean;
  colorScheme: 'light' | 'dark';
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  onPress,
  isDangerous = false,
  colorScheme,
}) => {
  const colors = Colors[colorScheme];

  return (
    <TouchableOpacity
      style={[
        styles.menuItem,
        {
          borderBottomColor: colors.border,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.menuIcon,
          {
            color: isDangerous ? colors.error : colors.icon,
          },
        ]}
      >
        {icon}
      </View>
      <Text
        style={[
          styles.menuLabel,
          {
            color: isDangerous ? colors.error : colors.text,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Calcular estatísticas
  const completedCount = CHECKPOINTS.filter((cp) => cp.status === 'completed').length;
  const inProgressCount = CHECKPOINTS.filter((cp) => cp.status === 'in-progress').length;
  const upcomingCount = CHECKPOINTS.filter((cp) => cp.status === 'upcoming').length;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header com Perfil */}
        <View
          style={[
            styles.profileHeader,
            {
              backgroundColor: colors.primary,
            },
          ]}
        >
          <View
            style={[
              styles.avatar,
              {
                backgroundColor: colors.background,
              },
            ]}
          >
            <User size={40} color={colors.primary} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Aluno FIAP</Text>
            <Text style={styles.profileEmail}>aluno@fiap.com.br</Text>
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsSection}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: colors.text,
              },
            ]}
          >
            Meu Progresso
          </Text>
          <StatItem
            icon={<CheckCircle2 size={24} color={colors.success} />}
            label="Concluídos"
            value={completedCount.toString()}
            color={colors.success}
          />
          <StatItem
            icon={<Clock size={24} color={colors.warning} />}
            label="Em Progresso"
            value={inProgressCount.toString()}
            color={colors.warning}
          />
          <StatItem
            icon={<AlertCircle size={24} color={colors.secondary} />}
            label="Próximos"
            value={upcomingCount.toString()}
            color={colors.secondary}
          />
        </View>

        {/* Configurações */}
        <View style={styles.menuSection}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: colors.text,
              },
            ]}
          >
            Configurações
          </Text>
          <MenuItem
            icon={<Settings size={20} color={colors.icon} />}
            label="Preferências"
            colorScheme={colorScheme ?? 'light'}
          />
          <MenuItem
            icon={<HelpCircle size={20} color={colors.icon} />}
            label="Ajuda e Suporte"
            colorScheme={colorScheme ?? 'light'}
          />
          <MenuItem
            icon={<LogOut size={20} color={colors.error} />}
            label="Sair"
            isDangerous
            colorScheme={colorScheme ?? 'light'}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.footerText,
              {
                color: colors.icon,
              },
            ]}
          >
            FIAP Checkpoint Tracker v1.0.0
          </Text>
          <Text
            style={[
              styles.footerSubtext,
              {
                color: colors.icon,
              },
            ]}
          >
            © 2026 FIAP. Todos os direitos reservados.
          </Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xl,
    borderBottomLeftRadius: BorderRadius.xl,
    borderBottomRightRadius: BorderRadius.xl,
    marginBottom: Spacing.lg,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: Spacing.xs,
  },
  profileEmail: {
    fontSize: FontSizes.sm,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  statsSection: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    marginBottom: Spacing.lg,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    fontSize: FontSizes.sm,
    color: '#999999',
    marginBottom: Spacing.xs,
  },
  statValue: {
    fontSize: FontSizes.xl,
    fontWeight: '700',
    color: '#2C2C2C',
  },
  menuSection: {
    paddingHorizontal: Spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },
  menuIcon: {
    marginRight: Spacing.md,
  },
  menuLabel: {
    fontSize: FontSizes.base,
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  footerText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  footerSubtext: {
    fontSize: FontSizes.xs,
  },
});
