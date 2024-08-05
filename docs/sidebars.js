/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
	sidebar: [
		"index",
		"ManualInstallation",
		{
			type: "category",
			label: "Choices",
			items: [
				"Choices/CaptureChoice",
				"Choices/TemplateChoice",
				"Choices/MultiChoice",
				"Choices/MacroChoice",
			],
		},
		"FormatSyntax",
		"InlineScripts",
		"AIAssistant",
		{
			type: "category",
			label: "Examples",
			items: [
				{
					type: "autogenerated",
					dirName: "Examples",
				},
			],
		},
		{
			type: "category",
			label: "Advanced",
			items: [
				"QuickAddAPI",
				"Advanced/scriptsWithSettings",
				"Advanced/ObsidianUri",
			],
		},
		{
			type: "category",
			label: "Misc",
			items: [
				{
					type: "autogenerated",
					dirName: "Misc",
				},
			],
		},
	],
};

module.exports = sidebars;
