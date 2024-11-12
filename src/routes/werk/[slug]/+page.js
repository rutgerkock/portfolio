import { projects } from '../../../lib/components/Projects';

export const load = ({ params }) => {
    const { slug } = params;
    const project = projects.find(p => p.id === slug);

    if (!project) {
        return {
            status: 404,
            error: new Error('Project not found')
        };
    }

    return { project };
};
