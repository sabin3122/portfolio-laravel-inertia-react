<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Projects;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {
        $projects = Projects::all();
        return Inertia::render('AdminPanel', ['projects'=>$projects]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'link' => 'required',
        ]);
        Projects::create($request->all());
        return redirect()->back();
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'link' => 'required',
        ]);
        Projects::find($id)->update($request->all());
        return redirect()->back();
    }
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return redirect()->back();
    }

    public function listProjects()
    {
        $projects = Projects::all();
        return response()->json($projects);
    }
}
