// Generated from ../LGFileParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LGFileParserListener } from "./LGFileParserListener";
import { LGFileParserVisitor } from "./LGFileParserVisitor";


export class LGFileParser extends Parser {
	public static readonly COMMENTS = 1;
	public static readonly WS = 2;
	public static readonly NEWLINE = 3;
	public static readonly HASH = 4;
	public static readonly DASH = 5;
	public static readonly IMPORT_DESC = 6;
	public static readonly IMPORT_PATH = 7;
	public static readonly INVALID_TOKEN_DEFAULT_MODE = 8;
	public static readonly WS_IN_NAME = 9;
	public static readonly IDENTIFIER = 10;
	public static readonly DOT = 11;
	public static readonly OPEN_PARENTHESIS = 12;
	public static readonly CLOSE_PARENTHESIS = 13;
	public static readonly COMMA = 14;
	public static readonly TEXT_IN_NAME = 15;
	public static readonly WS_IN_BODY_IGNORED = 16;
	public static readonly IF = 17;
	public static readonly ELSEIF = 18;
	public static readonly ELSE = 19;
	public static readonly SWITCH = 20;
	public static readonly CASE = 21;
	public static readonly DEFAULT = 22;
	public static readonly MULTI_LINE_TEXT = 23;
	public static readonly ESCAPE_CHARACTER = 24;
	public static readonly EXPRESSION = 25;
	public static readonly TEMPLATE_REF = 26;
	public static readonly TEXT_SEPARATOR = 27;
	public static readonly TEXT = 28;
	public static readonly RULE_file = 0;
	public static readonly RULE_paragraph = 1;
	public static readonly RULE_newline = 2;
	public static readonly RULE_templateDefinition = 3;
	public static readonly RULE_templateNameLine = 4;
	public static readonly RULE_errorTemplateName = 5;
	public static readonly RULE_templateName = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_templateBody = 8;
	public static readonly RULE_normalTemplateBody = 9;
	public static readonly RULE_templateString = 10;
	public static readonly RULE_normalTemplateString = 11;
	public static readonly RULE_errorTemplateString = 12;
	public static readonly RULE_ifElseTemplateBody = 13;
	public static readonly RULE_ifConditionRule = 14;
	public static readonly RULE_ifCondition = 15;
	public static readonly RULE_switchCaseTemplateBody = 16;
	public static readonly RULE_switchCaseRule = 17;
	public static readonly RULE_switchCaseStat = 18;
	public static readonly RULE_importDefinition = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "paragraph", "newline", "templateDefinition", "templateNameLine", 
		"errorTemplateName", "templateName", "parameters", "templateBody", "normalTemplateBody", 
		"templateString", "normalTemplateString", "errorTemplateString", "ifElseTemplateBody", 
		"ifConditionRule", "ifCondition", "switchCaseTemplateBody", "switchCaseRule", 
		"switchCaseStat", "importDefinition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'#'", undefined, undefined, 
		undefined, undefined, undefined, undefined, "'.'", "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENTS", "WS", "NEWLINE", "HASH", "DASH", "IMPORT_DESC", 
		"IMPORT_PATH", "INVALID_TOKEN_DEFAULT_MODE", "WS_IN_NAME", "IDENTIFIER", 
		"DOT", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "COMMA", "TEXT_IN_NAME", 
		"WS_IN_BODY_IGNORED", "IF", "ELSEIF", "ELSE", "SWITCH", "CASE", "DEFAULT", 
		"MULTI_LINE_TEXT", "ESCAPE_CHARACTER", "EXPRESSION", "TEMPLATE_REF", "TEXT_SEPARATOR", 
		"TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LGFileParser._LITERAL_NAMES, LGFileParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LGFileParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LGFileParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LGFileParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LGFileParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LGFileParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LGFileParser.RULE_file);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 40;
					this.paragraph();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 45;
			this.match(LGFileParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paragraph(): ParagraphContext {
		let _localctx: ParagraphContext = new ParagraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LGFileParser.RULE_paragraph);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LGFileParser.EOF:
			case LGFileParser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.newline();
				}
				break;
			case LGFileParser.HASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.templateDefinition();
				}
				break;
			case LGFileParser.IMPORT_DESC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 49;
				this.importDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newline(): NewlineContext {
		let _localctx: NewlineContext = new NewlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LGFileParser.RULE_newline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			_la = this._input.LA(1);
			if (!(_la === LGFileParser.EOF || _la === LGFileParser.NEWLINE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDefinition(): TemplateDefinitionContext {
		let _localctx: TemplateDefinitionContext = new TemplateDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LGFileParser.RULE_templateDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.templateNameLine();
			this.state = 55;
			this.newline();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LGFileParser.DASH || _la === LGFileParser.INVALID_TOKEN_DEFAULT_MODE) {
				{
				this.state = 56;
				this.templateBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateNameLine(): TemplateNameLineContext {
		let _localctx: TemplateNameLineContext = new TemplateNameLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LGFileParser.RULE_templateNameLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(LGFileParser.HASH);
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				{
				this.state = 60;
				this.templateName();
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LGFileParser.IDENTIFIER || _la === LGFileParser.OPEN_PARENTHESIS) {
					{
					this.state = 61;
					this.parameters();
					}
				}

				}
				}
				break;

			case 2:
				{
				this.state = 64;
				this.errorTemplateName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorTemplateName(): ErrorTemplateNameContext {
		let _localctx: ErrorTemplateNameContext = new ErrorTemplateNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LGFileParser.RULE_errorTemplateName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.IDENTIFIER) | (1 << LGFileParser.DOT) | (1 << LGFileParser.OPEN_PARENTHESIS) | (1 << LGFileParser.CLOSE_PARENTHESIS) | (1 << LGFileParser.COMMA) | (1 << LGFileParser.TEXT_IN_NAME))) !== 0)) {
				{
				{
				this.state = 67;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.IDENTIFIER) | (1 << LGFileParser.DOT) | (1 << LGFileParser.OPEN_PARENTHESIS) | (1 << LGFileParser.CLOSE_PARENTHESIS) | (1 << LGFileParser.COMMA) | (1 << LGFileParser.TEXT_IN_NAME))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateName(): TemplateNameContext {
		let _localctx: TemplateNameContext = new TemplateNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LGFileParser.RULE_templateName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(LGFileParser.IDENTIFIER);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LGFileParser.DOT) {
				{
				{
				this.state = 74;
				this.match(LGFileParser.DOT);
				this.state = 75;
				this.match(LGFileParser.IDENTIFIER);
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LGFileParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LGFileParser.OPEN_PARENTHESIS) {
				{
				this.state = 81;
				this.match(LGFileParser.OPEN_PARENTHESIS);
				}
			}

			this.state = 84;
			this.match(LGFileParser.IDENTIFIER);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LGFileParser.COMMA) {
				{
				{
				this.state = 85;
				this.match(LGFileParser.COMMA);
				this.state = 86;
				this.match(LGFileParser.IDENTIFIER);
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LGFileParser.CLOSE_PARENTHESIS) {
				{
				this.state = 92;
				this.match(LGFileParser.CLOSE_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateBody(): TemplateBodyContext {
		let _localctx: TemplateBodyContext = new TemplateBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LGFileParser.RULE_templateBody);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new NormalBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.normalTemplateBody();
				}
				break;

			case 2:
				_localctx = new IfElseBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.ifElseTemplateBody();
				}
				break;

			case 3:
				_localctx = new SwitchCaseBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.switchCaseTemplateBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalTemplateBody(): NormalTemplateBodyContext {
		let _localctx: NormalTemplateBodyContext = new NormalTemplateBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LGFileParser.RULE_normalTemplateBody);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 100;
					this.templateString();
					this.state = 101;
					this.newline();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 105;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateString(): TemplateStringContext {
		let _localctx: TemplateStringContext = new TemplateStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LGFileParser.RULE_templateString);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LGFileParser.DASH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.normalTemplateString();
				}
				break;
			case LGFileParser.INVALID_TOKEN_DEFAULT_MODE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.errorTemplateString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalTemplateString(): NormalTemplateStringContext {
		let _localctx: NormalTemplateStringContext = new NormalTemplateStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LGFileParser.RULE_normalTemplateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(LGFileParser.DASH);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.WS) | (1 << LGFileParser.MULTI_LINE_TEXT) | (1 << LGFileParser.ESCAPE_CHARACTER) | (1 << LGFileParser.EXPRESSION) | (1 << LGFileParser.TEMPLATE_REF) | (1 << LGFileParser.TEXT_SEPARATOR) | (1 << LGFileParser.TEXT))) !== 0)) {
				{
				{
				this.state = 112;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.WS) | (1 << LGFileParser.MULTI_LINE_TEXT) | (1 << LGFileParser.ESCAPE_CHARACTER) | (1 << LGFileParser.EXPRESSION) | (1 << LGFileParser.TEMPLATE_REF) | (1 << LGFileParser.TEXT_SEPARATOR) | (1 << LGFileParser.TEXT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorTemplateString(): ErrorTemplateStringContext {
		let _localctx: ErrorTemplateStringContext = new ErrorTemplateStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LGFileParser.RULE_errorTemplateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 118;
				this.match(LGFileParser.INVALID_TOKEN_DEFAULT_MODE);
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LGFileParser.INVALID_TOKEN_DEFAULT_MODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseTemplateBody(): IfElseTemplateBodyContext {
		let _localctx: IfElseTemplateBodyContext = new IfElseTemplateBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LGFileParser.RULE_ifElseTemplateBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 123;
				this.ifConditionRule();
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LGFileParser.DASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifConditionRule(): IfConditionRuleContext {
		let _localctx: IfConditionRuleContext = new IfConditionRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LGFileParser.RULE_ifConditionRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.ifCondition();
			this.state = 129;
			this.newline();
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 130;
				this.normalTemplateBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifCondition(): IfConditionContext {
		let _localctx: IfConditionContext = new IfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LGFileParser.RULE_ifCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(LGFileParser.DASH);
			this.state = 134;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.IF) | (1 << LGFileParser.ELSEIF) | (1 << LGFileParser.ELSE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.WS) | (1 << LGFileParser.EXPRESSION) | (1 << LGFileParser.TEXT))) !== 0)) {
				{
				{
				this.state = 135;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.WS) | (1 << LGFileParser.EXPRESSION) | (1 << LGFileParser.TEXT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCaseTemplateBody(): SwitchCaseTemplateBodyContext {
		let _localctx: SwitchCaseTemplateBodyContext = new SwitchCaseTemplateBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LGFileParser.RULE_switchCaseTemplateBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 141;
				this.switchCaseRule();
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LGFileParser.DASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCaseRule(): SwitchCaseRuleContext {
		let _localctx: SwitchCaseRuleContext = new SwitchCaseRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LGFileParser.RULE_switchCaseRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.switchCaseStat();
			this.state = 147;
			this.newline();
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.normalTemplateBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCaseStat(): SwitchCaseStatContext {
		let _localctx: SwitchCaseStatContext = new SwitchCaseStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LGFileParser.RULE_switchCaseStat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(LGFileParser.DASH);
			this.state = 152;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.SWITCH) | (1 << LGFileParser.CASE) | (1 << LGFileParser.DEFAULT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.WS) | (1 << LGFileParser.EXPRESSION) | (1 << LGFileParser.TEXT))) !== 0)) {
				{
				{
				this.state = 153;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LGFileParser.WS) | (1 << LGFileParser.EXPRESSION) | (1 << LGFileParser.TEXT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDefinition(): ImportDefinitionContext {
		let _localctx: ImportDefinitionContext = new ImportDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LGFileParser.RULE_importDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(LGFileParser.IMPORT_DESC);
			this.state = 160;
			this.match(LGFileParser.IMPORT_PATH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1E\xA5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x06\x02,\n\x02\r\x02\x0E" +
		"\x02-\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x035\n\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x05\x05<\n\x05\x03\x06\x03\x06\x03\x06\x05" +
		"\x06A\n\x06\x03\x06\x05\x06D\n\x06\x03\x07\x07\x07G\n\x07\f\x07\x0E\x07" +
		"J\v\x07\x03\b\x03\b\x03\b\x07\bO\n\b\f\b\x0E\bR\v\b\x03\t\x05\tU\n\t\x03" +
		"\t\x03\t\x03\t\x07\tZ\n\t\f\t\x0E\t]\v\t\x03\t\x05\t`\n\t\x03\n\x03\n" +
		"\x03\n\x05\ne\n\n\x03\v\x03\v\x03\v\x06\vj\n\v\r\v\x0E\vk\x03\f\x03\f" +
		"\x05\fp\n\f\x03\r\x03\r\x07\rt\n\r\f\r\x0E\rw\v\r\x03\x0E\x06\x0Ez\n\x0E" +
		"\r\x0E\x0E\x0E{\x03\x0F\x06\x0F\x7F\n\x0F\r\x0F\x0E\x0F\x80\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\x86\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\x8B\n\x11" +
		"\f\x11\x0E\x11\x8E\v\x11\x03\x12\x06\x12\x91\n\x12\r\x12\x0E\x12\x92\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\x98\n\x13\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\x9D\n\x14\f\x14\x0E\x14\xA0\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"-\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02\x02\b\x03\x03\x05\x05\x03\x02\f\x11\x04\x02\x04\x04\x19\x1E" +
		"\x03\x02\x13\x15\x05\x02\x04\x04\x1B\x1B\x1E\x1E\x03\x02\x16\x18\xA7\x02" +
		"+\x03\x02\x02\x02\x044\x03\x02\x02\x02\x066\x03\x02\x02\x02\b8\x03\x02" +
		"\x02\x02\n=\x03\x02\x02\x02\fH\x03\x02\x02\x02\x0EK\x03\x02\x02\x02\x10" +
		"T\x03\x02\x02\x02\x12d\x03\x02\x02\x02\x14i\x03\x02\x02\x02\x16o\x03\x02" +
		"\x02\x02\x18q\x03\x02\x02\x02\x1Ay\x03\x02\x02\x02\x1C~\x03\x02\x02\x02" +
		"\x1E\x82\x03\x02\x02\x02 \x87\x03\x02\x02\x02\"\x90\x03\x02\x02\x02$\x94" +
		"\x03\x02\x02\x02&\x99\x03\x02\x02\x02(\xA1\x03\x02\x02\x02*,\x05\x04\x03" +
		"\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x03\x02\x02\x02-+\x03\x02\x02" +
		"\x02./\x03\x02\x02\x02/0\x07\x02\x02\x030\x03\x03\x02\x02\x0215\x05\x06" +
		"\x04\x0225\x05\b\x05\x0235\x05(\x15\x0241\x03\x02\x02\x0242\x03\x02\x02" +
		"\x0243\x03\x02\x02\x025\x05\x03\x02\x02\x0267\t\x02\x02\x027\x07\x03\x02" +
		"\x02\x0289\x05\n\x06\x029;\x05\x06\x04\x02:<\x05\x12\n\x02;:\x03\x02\x02" +
		"\x02;<\x03\x02\x02\x02<\t\x03\x02\x02\x02=C\x07\x06\x02\x02>@\x05\x0E" +
		"\b\x02?A\x05\x10\t\x02@?\x03\x02\x02\x02@A\x03\x02\x02\x02AD\x03\x02\x02" +
		"\x02BD\x05\f\x07\x02C>\x03\x02\x02\x02CB\x03\x02\x02\x02D\v\x03\x02\x02" +
		"\x02EG\t\x03\x02\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02I\r\x03\x02\x02\x02JH\x03\x02\x02\x02KP\x07\f\x02" +
		"\x02LM\x07\r\x02\x02MO\x07\f\x02\x02NL\x03\x02\x02\x02OR\x03\x02\x02\x02" +
		"PN\x03\x02\x02\x02PQ\x03\x02\x02\x02Q\x0F\x03\x02\x02\x02RP\x03\x02\x02" +
		"\x02SU\x07\x0E\x02\x02TS\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02" +
		"\x02V[\x07\f\x02\x02WX\x07\x10\x02\x02XZ\x07\f\x02\x02YW\x03\x02\x02\x02" +
		"Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\_\x03\x02\x02" +
		"\x02][\x03\x02\x02\x02^`\x07\x0F\x02\x02_^\x03\x02\x02\x02_`\x03\x02\x02" +
		"\x02`\x11\x03\x02\x02\x02ae\x05\x14\v\x02be\x05\x1C\x0F\x02ce\x05\"\x12" +
		"\x02da\x03\x02\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02e\x13\x03\x02" +
		"\x02\x02fg\x05\x16\f\x02gh\x05\x06\x04\x02hj\x03\x02\x02\x02if\x03\x02" +
		"\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l\x15\x03" +
		"\x02\x02\x02mp\x05\x18\r\x02np\x05\x1A\x0E\x02om\x03\x02\x02\x02on\x03" +
		"\x02\x02\x02p\x17\x03\x02\x02\x02qu\x07\x07\x02\x02rt\t\x04\x02\x02sr" +
		"\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02" +
		"v\x19\x03\x02\x02\x02wu\x03\x02\x02\x02xz\x07\n\x02\x02yx\x03\x02\x02" +
		"\x02z{\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x1B\x03\x02" +
		"\x02\x02}\x7F\x05\x1E\x10\x02~}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x1D\x03\x02\x02\x02" +
		"\x82\x83\x05 \x11\x02\x83\x85\x05\x06\x04\x02\x84\x86\x05\x14\v\x02\x85" +
		"\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x1F\x03\x02\x02\x02\x87" +
		"\x88\x07\x07\x02\x02\x88\x8C\t\x05\x02\x02\x89\x8B\t\x06\x02\x02\x8A\x89" +
		"\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D" +
		"\x03\x02\x02\x02\x8D!\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x91" +
		"\x05$\x13\x02\x90\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x90" +
		"\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93#\x03\x02\x02\x02\x94\x95" +
		"\x05&\x14\x02\x95\x97\x05\x06\x04\x02\x96\x98\x05\x14\v\x02\x97\x96\x03" +
		"\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98%\x03\x02\x02\x02\x99\x9A\x07" +
		"\x07\x02\x02\x9A\x9E\t\x07\x02\x02\x9B\x9D\t\x06\x02\x02\x9C\x9B\x03\x02" +
		"\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\'\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x07\b\x02" +
		"\x02\xA2\xA3\x07\t\x02\x02\xA3)\x03\x02\x02\x02\x17-4;@CHPT[_dkou{\x80" +
		"\x85\x8C\x92\x97\x9E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LGFileParser.__ATN) {
			LGFileParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LGFileParser._serializedATN));
		}

		return LGFileParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LGFileParser.EOF, 0); }
	public paragraph(): ParagraphContext[];
	public paragraph(i: number): ParagraphContext;
	public paragraph(i?: number): ParagraphContext | ParagraphContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParagraphContext);
		} else {
			return this.getRuleContext(i, ParagraphContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_file; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParagraphContext extends ParserRuleContext {
	public newline(): NewlineContext | undefined {
		return this.tryGetRuleContext(0, NewlineContext);
	}
	public templateDefinition(): TemplateDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefinitionContext);
	}
	public importDefinition(): ImportDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ImportDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_paragraph; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterParagraph) {
			listener.enterParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitParagraph) {
			listener.exitParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitParagraph) {
			return visitor.visitParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewlineContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.NEWLINE, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_newline; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterNewline) {
			listener.enterNewline(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitNewline) {
			listener.exitNewline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitNewline) {
			return visitor.visitNewline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateDefinitionContext extends ParserRuleContext {
	public templateNameLine(): TemplateNameLineContext {
		return this.getRuleContext(0, TemplateNameLineContext);
	}
	public newline(): NewlineContext {
		return this.getRuleContext(0, NewlineContext);
	}
	public templateBody(): TemplateBodyContext | undefined {
		return this.tryGetRuleContext(0, TemplateBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_templateDefinition; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterTemplateDefinition) {
			listener.enterTemplateDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitTemplateDefinition) {
			listener.exitTemplateDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitTemplateDefinition) {
			return visitor.visitTemplateDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateNameLineContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(LGFileParser.HASH, 0); }
	public errorTemplateName(): ErrorTemplateNameContext | undefined {
		return this.tryGetRuleContext(0, ErrorTemplateNameContext);
	}
	public templateName(): TemplateNameContext | undefined {
		return this.tryGetRuleContext(0, TemplateNameContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_templateNameLine; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterTemplateNameLine) {
			listener.enterTemplateNameLine(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitTemplateNameLine) {
			listener.exitTemplateNameLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitTemplateNameLine) {
			return visitor.visitTemplateNameLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorTemplateNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.IDENTIFIER);
		} else {
			return this.getToken(LGFileParser.IDENTIFIER, i);
		}
	}
	public TEXT_IN_NAME(): TerminalNode[];
	public TEXT_IN_NAME(i: number): TerminalNode;
	public TEXT_IN_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.TEXT_IN_NAME);
		} else {
			return this.getToken(LGFileParser.TEXT_IN_NAME, i);
		}
	}
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.OPEN_PARENTHESIS);
		} else {
			return this.getToken(LGFileParser.OPEN_PARENTHESIS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.COMMA);
		} else {
			return this.getToken(LGFileParser.COMMA, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(LGFileParser.CLOSE_PARENTHESIS, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.DOT);
		} else {
			return this.getToken(LGFileParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_errorTemplateName; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterErrorTemplateName) {
			listener.enterErrorTemplateName(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitErrorTemplateName) {
			listener.exitErrorTemplateName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitErrorTemplateName) {
			return visitor.visitErrorTemplateName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.IDENTIFIER);
		} else {
			return this.getToken(LGFileParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.DOT);
		} else {
			return this.getToken(LGFileParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_templateName; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterTemplateName) {
			listener.enterTemplateName(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitTemplateName) {
			listener.exitTemplateName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitTemplateName) {
			return visitor.visitTemplateName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.IDENTIFIER);
		} else {
			return this.getToken(LGFileParser.IDENTIFIER, i);
		}
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.OPEN_PARENTHESIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.COMMA);
		} else {
			return this.getToken(LGFileParser.COMMA, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_parameters; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateBodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_templateBody; }
	public copyFrom(ctx: TemplateBodyContext): void {
		super.copyFrom(ctx);
	}
}
export class SwitchCaseBodyContext extends TemplateBodyContext {
	public switchCaseTemplateBody(): SwitchCaseTemplateBodyContext {
		return this.getRuleContext(0, SwitchCaseTemplateBodyContext);
	}
	constructor(ctx: TemplateBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterSwitchCaseBody) {
			listener.enterSwitchCaseBody(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitSwitchCaseBody) {
			listener.exitSwitchCaseBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitSwitchCaseBody) {
			return visitor.visitSwitchCaseBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalBodyContext extends TemplateBodyContext {
	public normalTemplateBody(): NormalTemplateBodyContext {
		return this.getRuleContext(0, NormalTemplateBodyContext);
	}
	constructor(ctx: TemplateBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterNormalBody) {
			listener.enterNormalBody(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitNormalBody) {
			listener.exitNormalBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitNormalBody) {
			return visitor.visitNormalBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseBodyContext extends TemplateBodyContext {
	public ifElseTemplateBody(): IfElseTemplateBodyContext {
		return this.getRuleContext(0, IfElseTemplateBodyContext);
	}
	constructor(ctx: TemplateBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterIfElseBody) {
			listener.enterIfElseBody(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitIfElseBody) {
			listener.exitIfElseBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitIfElseBody) {
			return visitor.visitIfElseBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalTemplateBodyContext extends ParserRuleContext {
	public templateString(): TemplateStringContext[];
	public templateString(i: number): TemplateStringContext;
	public templateString(i?: number): TemplateStringContext | TemplateStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateStringContext);
		} else {
			return this.getRuleContext(i, TemplateStringContext);
		}
	}
	public newline(): NewlineContext[];
	public newline(i: number): NewlineContext;
	public newline(i?: number): NewlineContext | NewlineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NewlineContext);
		} else {
			return this.getRuleContext(i, NewlineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_normalTemplateBody; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterNormalTemplateBody) {
			listener.enterNormalTemplateBody(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitNormalTemplateBody) {
			listener.exitNormalTemplateBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitNormalTemplateBody) {
			return visitor.visitNormalTemplateBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringContext extends ParserRuleContext {
	public normalTemplateString(): NormalTemplateStringContext | undefined {
		return this.tryGetRuleContext(0, NormalTemplateStringContext);
	}
	public errorTemplateString(): ErrorTemplateStringContext | undefined {
		return this.tryGetRuleContext(0, ErrorTemplateStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_templateString; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterTemplateString) {
			listener.enterTemplateString(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitTemplateString) {
			listener.exitTemplateString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitTemplateString) {
			return visitor.visitTemplateString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalTemplateStringContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(LGFileParser.DASH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.WS);
		} else {
			return this.getToken(LGFileParser.WS, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.TEXT);
		} else {
			return this.getToken(LGFileParser.TEXT, i);
		}
	}
	public EXPRESSION(): TerminalNode[];
	public EXPRESSION(i: number): TerminalNode;
	public EXPRESSION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.EXPRESSION);
		} else {
			return this.getToken(LGFileParser.EXPRESSION, i);
		}
	}
	public TEMPLATE_REF(): TerminalNode[];
	public TEMPLATE_REF(i: number): TerminalNode;
	public TEMPLATE_REF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.TEMPLATE_REF);
		} else {
			return this.getToken(LGFileParser.TEMPLATE_REF, i);
		}
	}
	public TEXT_SEPARATOR(): TerminalNode[];
	public TEXT_SEPARATOR(i: number): TerminalNode;
	public TEXT_SEPARATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.TEXT_SEPARATOR);
		} else {
			return this.getToken(LGFileParser.TEXT_SEPARATOR, i);
		}
	}
	public MULTI_LINE_TEXT(): TerminalNode[];
	public MULTI_LINE_TEXT(i: number): TerminalNode;
	public MULTI_LINE_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.MULTI_LINE_TEXT);
		} else {
			return this.getToken(LGFileParser.MULTI_LINE_TEXT, i);
		}
	}
	public ESCAPE_CHARACTER(): TerminalNode[];
	public ESCAPE_CHARACTER(i: number): TerminalNode;
	public ESCAPE_CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.ESCAPE_CHARACTER);
		} else {
			return this.getToken(LGFileParser.ESCAPE_CHARACTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_normalTemplateString; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterNormalTemplateString) {
			listener.enterNormalTemplateString(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitNormalTemplateString) {
			listener.exitNormalTemplateString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitNormalTemplateString) {
			return visitor.visitNormalTemplateString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorTemplateStringContext extends ParserRuleContext {
	public INVALID_TOKEN_DEFAULT_MODE(): TerminalNode[];
	public INVALID_TOKEN_DEFAULT_MODE(i: number): TerminalNode;
	public INVALID_TOKEN_DEFAULT_MODE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.INVALID_TOKEN_DEFAULT_MODE);
		} else {
			return this.getToken(LGFileParser.INVALID_TOKEN_DEFAULT_MODE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_errorTemplateString; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterErrorTemplateString) {
			listener.enterErrorTemplateString(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitErrorTemplateString) {
			listener.exitErrorTemplateString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitErrorTemplateString) {
			return visitor.visitErrorTemplateString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseTemplateBodyContext extends ParserRuleContext {
	public ifConditionRule(): IfConditionRuleContext[];
	public ifConditionRule(i: number): IfConditionRuleContext;
	public ifConditionRule(i?: number): IfConditionRuleContext | IfConditionRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfConditionRuleContext);
		} else {
			return this.getRuleContext(i, IfConditionRuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_ifElseTemplateBody; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterIfElseTemplateBody) {
			listener.enterIfElseTemplateBody(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitIfElseTemplateBody) {
			listener.exitIfElseTemplateBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitIfElseTemplateBody) {
			return visitor.visitIfElseTemplateBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionRuleContext extends ParserRuleContext {
	public ifCondition(): IfConditionContext {
		return this.getRuleContext(0, IfConditionContext);
	}
	public newline(): NewlineContext {
		return this.getRuleContext(0, NewlineContext);
	}
	public normalTemplateBody(): NormalTemplateBodyContext | undefined {
		return this.tryGetRuleContext(0, NormalTemplateBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_ifConditionRule; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterIfConditionRule) {
			listener.enterIfConditionRule(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitIfConditionRule) {
			listener.exitIfConditionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitIfConditionRule) {
			return visitor.visitIfConditionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(LGFileParser.DASH, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.ELSE, 0); }
	public ELSEIF(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.ELSEIF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.WS);
		} else {
			return this.getToken(LGFileParser.WS, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.TEXT);
		} else {
			return this.getToken(LGFileParser.TEXT, i);
		}
	}
	public EXPRESSION(): TerminalNode[];
	public EXPRESSION(i: number): TerminalNode;
	public EXPRESSION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.EXPRESSION);
		} else {
			return this.getToken(LGFileParser.EXPRESSION, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_ifCondition; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterIfCondition) {
			listener.enterIfCondition(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitIfCondition) {
			listener.exitIfCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitIfCondition) {
			return visitor.visitIfCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseTemplateBodyContext extends ParserRuleContext {
	public switchCaseRule(): SwitchCaseRuleContext[];
	public switchCaseRule(i: number): SwitchCaseRuleContext;
	public switchCaseRule(i?: number): SwitchCaseRuleContext | SwitchCaseRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseRuleContext);
		} else {
			return this.getRuleContext(i, SwitchCaseRuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_switchCaseTemplateBody; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterSwitchCaseTemplateBody) {
			listener.enterSwitchCaseTemplateBody(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitSwitchCaseTemplateBody) {
			listener.exitSwitchCaseTemplateBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitSwitchCaseTemplateBody) {
			return visitor.visitSwitchCaseTemplateBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseRuleContext extends ParserRuleContext {
	public switchCaseStat(): SwitchCaseStatContext {
		return this.getRuleContext(0, SwitchCaseStatContext);
	}
	public newline(): NewlineContext {
		return this.getRuleContext(0, NewlineContext);
	}
	public normalTemplateBody(): NormalTemplateBodyContext | undefined {
		return this.tryGetRuleContext(0, NormalTemplateBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_switchCaseRule; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterSwitchCaseRule) {
			listener.enterSwitchCaseRule(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitSwitchCaseRule) {
			listener.exitSwitchCaseRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitSwitchCaseRule) {
			return visitor.visitSwitchCaseRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseStatContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(LGFileParser.DASH, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.SWITCH, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.CASE, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(LGFileParser.DEFAULT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.WS);
		} else {
			return this.getToken(LGFileParser.WS, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.TEXT);
		} else {
			return this.getToken(LGFileParser.TEXT, i);
		}
	}
	public EXPRESSION(): TerminalNode[];
	public EXPRESSION(i: number): TerminalNode;
	public EXPRESSION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LGFileParser.EXPRESSION);
		} else {
			return this.getToken(LGFileParser.EXPRESSION, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_switchCaseStat; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterSwitchCaseStat) {
			listener.enterSwitchCaseStat(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitSwitchCaseStat) {
			listener.exitSwitchCaseStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitSwitchCaseStat) {
			return visitor.visitSwitchCaseStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDefinitionContext extends ParserRuleContext {
	public IMPORT_DESC(): TerminalNode { return this.getToken(LGFileParser.IMPORT_DESC, 0); }
	public IMPORT_PATH(): TerminalNode { return this.getToken(LGFileParser.IMPORT_PATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LGFileParser.RULE_importDefinition; }
	// @Override
	public enterRule(listener: LGFileParserListener): void {
		if (listener.enterImportDefinition) {
			listener.enterImportDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: LGFileParserListener): void {
		if (listener.exitImportDefinition) {
			listener.exitImportDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LGFileParserVisitor<Result>): Result {
		if (visitor.visitImportDefinition) {
			return visitor.visitImportDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


