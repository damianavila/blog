#!/usr/bin/env python
# -*- coding: utf-8 -*-
from livereload.task import Task
import json
import subprocess

def f():
    subprocess.call(("nikola", "build"))

fdata = json.loads('''["conf.py", "themes", "templates", "galleries", "posts", "posts", "posts", "stories", "stories", "stories", ""]''')

for watch in fdata:
    Task.add(watch, f)
