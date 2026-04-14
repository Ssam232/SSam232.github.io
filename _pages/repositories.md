---
layout: page
permalink: /repositories/
title: repositories
description: Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

## Featured Projects

<div class="row mb-5 align-items-center">
  <div class="col-md-6 d-flex justify-content-center">
    {% include repository/repo.liquid repository="SSam232/Volunteer-Scheduler-V3" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    <p>This is a volunteer scheduling tool built with Python and Streamlit explicitly for the PEMRAP team at the Alberta Children's Hospital. It organizes shift registrations effectively and prevents scheduling overlaps.</p>
    <p><a href="https://volunteer-scheduler-v3.streamlit.app/" target="_blank" rel="noopener noreferrer">View the live application here!</a></p>
  </div>
</div>

<div class="row mb-5 align-items-center">
  <div class="col-md-6 d-flex justify-content-center">
    {% include repository/repo.liquid repository="SSam232/knes381" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    <p>A repository containing my KNES 381 assignments, projects, and computational demonstrations. It showcases my exploration of data analysis and programming applied to kinesiology.</p>
  </div>
</div>

<div class="row mb-5 align-items-center">
  <div class="col-md-6 d-flex justify-content-center">
    {% include repository/repo.liquid repository="SSam232/SSam232.github.io" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    <p>The source code behind the personal portfolio website you are currently viewing! Built using Jekyll and the versatile open-source al-folio theme.</p>
  </div>
</div>
