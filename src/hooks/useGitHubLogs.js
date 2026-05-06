import { useState, useEffect } from 'react';

export const useGitHubLogs = (owner, repo, workflowId, token) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Get latest workflow run
      const runsRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs?per_page=1`,
        { headers: { 'Authorization': `token ${token}` } }
      );
      const runsData = await runsRes.json();
      const runId = runsData.workflow_runs[0]?.id;
      
      if (!runId) throw new Error('No runs found');

      // Get jobs for that run
      const jobsRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/actions/runs/${runId}/jobs`,
        { headers: { 'Authorization': `token ${token}` } }
      );
      const jobsData = await jobsRes.json();

      // Fetch logs for each job step (simplified)
      const logEntries = [];
      for (const job of jobsData.jobs) {
        logEntries.push(`🔹 Job: ${job.name} - ${job.conclusion}`);
        // Note: Full step logs require additional API calls and parsing
      }
      
      setLogs(logEntries);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch logs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on mount (optional)
//   useEffect(() => {
//     if (token) fetchLogs();
//   }, [token]);

  return { logs, loading, error, refetch: fetchLogs };
};