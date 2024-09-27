package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.A15thStoryInfo;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.ui.loading.loadingstyle.ILoadingStyle;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.events.TimerEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.media.SoundTransform;
   import flash.net.URLRequest;
   import flash.utils.Timer;
   import gs.TweenLite;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AMultiStory extends ActivityModel
   {
      private const storyResURL:String = "appRes/2024/0920/Cafe/Res/";
      
      private var storyTransition:AStoryTransition;
      
      private var reviewPanel:A15thStoryReviewPanel;
      
      private var initLogIdx:int = 0;
      
      private var storyID:int = 1;
      
      private var dialogList:XMLList;
      
      private var maxDiaIndex:int = 0;
      
      private var storyRecordID:int;
      
      private var actorInfoList:Array;
      
      private var bgInfoList:Array;
      
      private var isInClear:Boolean = false;
      
      private var curDialogXML:XML;
      
      private var _logIndex:int = 0;
      
      private var txtTimer:Timer;
      
      private var showingStr:String;
      
      private var showingStrEnd:int = 0;
      
      private var isInShowingTxt:Boolean = false;
      
      private var jumpToArr:Array;
      
      private var curHeadIDInShow:int = -1000;
      
      private var bgmTimer:Timer;
      
      private var bgmSound:Sound;
      
      private var bgmSC:SoundChannel;
      
      private var curBGMIdx:String = "";
      
      private var _endS:Sound;
      
      private var _endC:SoundChannel;
      
      private var imgHashMap:HashMap;
      
      private var imgInUse:Array;
      
      private var imgInUseHash:HashMap;
      
      private var bgHashMap:HashMap;
      
      private var bgInUse:int;
      
      private var _loadingView:ILoadingStyle;
      
      private var _loader:Loader;
      
      private var loadBlackBg:Sprite;
      
      private var loadCnt:int;
      
      private var _loaderHead:Loader;
      
      private var waitLoadArr:Array;
      
      private var urlStr:String;
      
      private var curLoadingImgIdx:int;
      
      private var curLoadingBgIdx:int;
      
      private var isNeedLoadHead:Boolean = false;
      
      private var curLoadingHeadIdx:int = -1;
      
      private var headImgHashMap:HashMap;
      
      private var isInTween:Boolean = false;
      
      public function AMultiStory()
      {
         this.imgHashMap = new HashMap();
         this.imgInUse = new Array();
         this.imgInUseHash = new HashMap();
         this.bgHashMap = new HashMap();
         this.waitLoadArr = [];
         this.headImgHashMap = new HashMap();
         if(MainManager.isDebug)
         {
            this.checkSafe();
         }
         super();
         resUrl = "2024/0920/Cafe/AMultiStory";
         configUrl = "2024/0920/Cafe/StarCafeStoryConfig";
         this._loaderHead = new Loader();
         this._loaderHead.contentLoaderInfo.addEventListener(Event.COMPLETE,this.onPNGComplete_Head);
         this._loaderHead.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.errorHeadHandler);
      }
      
      public static function stringBack(str:String) : String
      {
         var myPattern:RegExp = /\\\\n/g;
         var pattern:RegExp = /\r|\n/g;
         str = str.replace(myPattern,"NNN");
         str = str.replace(pattern,"");
         return str.replace(/NNN/g,"\n");
      }
      
      override public function init(data:Object = null) : void
      {
         this.storyID = String(data).split("_")[0];
         if(String(data).indexOf("_") > 0)
         {
            this.initLogIdx = String(data).split("_")[1];
         }
         else
         {
            A15thStoryInfo.dialogReviewArr = [];
            A15thStoryInfo.saveAnswerArr = [];
         }
      }
      
      override public function show() : void
      {
         var dd:* = undefined;
         var i:int = 0;
         SoundManager.stopSoundImmediately();
         this.dialogList = A15thStoryInfo.getStoryXML(this.storyID).elements("dialog");
         for each(dd in this.dialogList)
         {
            ++this.maxDiaIndex;
         }
         super.show();
         this.storyTransition = new AStoryTransition(ui.storyTransition);
         this.reviewPanel = new A15thStoryReviewPanel(ui.reviewPanel);
         ui.bgDesMc.visible = false;
         ui.mainUI.dialogTrigger.wordTxt.text = "";
         for(i = 1; i <= 7; i++)
         {
            if(Boolean(ui.mainUI["choice_" + i]))
            {
               ui.mainUI["choice_" + i].choiceTxt.mouseEnabled = false;
            }
         }
         EventManager.addEventListener("EndA15thTransition",this.onEndTransition);
         this.txtTimer = new Timer(40,500);
         this.txtTimer.addEventListener(TimerEvent.TIMER,this.onTxtShow);
         this.bgmTimer = new Timer(600,20);
         this.bgmTimer.addEventListener(TimerEvent.TIMER,this.onBGMTimer);
         ui.mainUI.dialogTrigger.petHead.visible = false;
         ui.mainUI.dialogTrigger.nameTxt.text = "";
         ui.mainUI.dialogTrigger.wordTxt.text = "";
         this.hideJumpBtn();
         this.loadAllRes();
         ui.mainUI.dialogTrigger.wordTxt.mouseEnabled = false;
         ui.mainUI.dialogTrigger.nameTxt.mouseEnabled = false;
         ui.mainUI.dialogTrigger.petHead.mouseChildren = ui.mainUI.dialogTrigger.petHead.mouseEnabled = false;
         ui.mainUI.dialogTrigger.triBth.mouseEnabled = false;
         if(Boolean(ui.debugBtn))
         {
            if(!MainManager.isDebug)
            {
               ui.debugBtn.visible = false;
            }
         }
      }
      
      override protected function updatePanel() : void
      {
         this.storyTransition.backPanel = getValue("backPanel");
         this.storyRecordID = getValue("storyRecordID");
         this.actorInfoList = getValue("actorInfoList");
         this.bgInfoList = getValue("bgInfoList");
         this.reviewPanel.actorInfoList = this.actorInfoList;
         if(this.isNeedLoadHead)
         {
            this.loadAllHeadPNG();
            this.isNeedLoadHead = false;
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var backPanel:* = undefined;
         var cIdx:int = 0;
         if(this.isInTween)
         {
            return;
         }
         if(this.isInClear)
         {
            ui.mainUI.visible = true;
            this.isInClear = false;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               backPanel = this.storyTransition.backPanel;
               ModuleManager.showAppModule(backPanel);
               this.hide();
               break;
            case "clearBtn":
               ui.mainUI.visible = !ui.mainUI.visible;
               this.isInClear = true;
               break;
            case "reviewBtn":
               this.reviewPanel.show();
               break;
            case "choiceBtn":
               cIdx = int(e.target.parent.name.split("_")[1]);
               this.jumpFunc(cIdx);
               break;
            case "dialogTrigger":
               if(this.isInShowingTxt)
               {
                  this.endShowTxt();
               }
               else if(this.jumpToArr == null)
               {
                  ++this.logIndex;
               }
               else if(this.jumpToArr.length == 1 && String(this.curDialogXML.@ChoiceArr) == "")
               {
                  this.jumpFunc(1);
               }
               break;
            case "debugBtn":
               this.logIndex = this.maxDiaIndex;
               break;
            case "choiceBtn_" + index:
               ++this.logIndex;
               break;
            default:
               this.reviewPanel.onClick(btnName);
         }
      }
      
      private function jumpFunc(idx:int) : void
      {
         var jInfoArr:Array = null;
         var jumpDest:int = 0;
         var saveCode:int = 0;
         var winSaveCode:int = 0;
         var loseSaveCode:int = 0;
         var fightId:int = 0;
         var jumpTo:String = this.jumpToArr[idx - 1];
         jInfoArr = jumpTo.split(",");
         if(jInfoArr[0] == 3)
         {
            PetBagControllerNew.showByBuffer();
         }
         else if(jInfoArr[0] == 1 || jumpTo.indexOf(",") < 0)
         {
            jumpDest = jInfoArr.length > 1 ? int(jInfoArr[1]) : int(jumpTo);
            saveCode = this.calculateAnswerSave(this.curDialogXML.@AnswerID,jumpDest.toString());
            if(saveCode > 0)
            {
               A15thStoryInfo.saveAnswerArr.push(saveCode);
            }
            this.logIndex = jumpDest;
            this.hideJumpBtn();
         }
         else if(jInfoArr[0] == 2)
         {
            winSaveCode = this.calculateAnswerSave(this.curDialogXML.@AnswerID,jInfoArr[2]);
            loseSaveCode = this.calculateAnswerSave(this.curDialogXML.@AnswerID,jInfoArr[3]);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if(FightManager.isWin)
               {
                  ModuleManager.showAppModule("AMultiStory",storyID + "_" + jInfoArr[2]);
                  if(saveCode > 0)
                  {
                     A15thStoryInfo.saveAnswerArr.push(winSaveCode);
                  }
               }
               else
               {
                  ModuleManager.showAppModule("AMultiStory",storyID + "_" + jInfoArr[3]);
                  if(saveCode > 0)
                  {
                     A15thStoryInfo.saveAnswerArr.push(loseSaveCode);
                  }
               }
            });
            this.hide();
            fightId = int(jInfoArr[1]);
            if(fightId > 10000)
            {
               FightManager.fightNoMapBoss("",fightId);
            }
            else
            {
               FightManager.tryFight(fightId,[0,0,0,0,0]);
            }
         }
      }
      
      override public function hide() : void
      {
         this.actorInfoList = null;
         this.bgInfoList = null;
         this.storyTransition.destroy();
         this.storyTransition = null;
         this.imgInUse = [];
         this.imgInUseHash.clear();
         this.reviewPanel.destroy();
         this.dialogList = null;
         this._loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.onPNGComplete);
         this._loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this.imgHashMap.clear();
         this._loaderHead.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.onPNGComplete_Head);
         this._loaderHead.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHeadHandler);
         this.headImgHashMap.clear();
         SoundManager.stopSoundImmediately();
         var mapId:uint = uint(MapManager.currentMap.id);
         var soundId:String = MapXMLInfo.getBgSoundIdByMapId(MapManager.getResMapID(mapId));
         SoundManager.playSoundById(soundId);
         this.destroySound();
         this.destroyBGM();
         EventManager.removeEventListener("EndA15thTransition",this.onEndTransition);
         this.txtTimer.removeEventListener(TimerEvent.TIMER,this.onTxtShow);
         this.bgmTimer.stop();
         this.bgmTimer.removeEventListener(TimerEvent.TIMER,this.onBGMTimer);
         this._loader = null;
         this._loaderHead = null;
         this.actorInfoList = null;
         this.bgInfoList = null;
         this.jumpToArr = null;
         super.hide();
      }
      
      private function playEnterTransitionAnim() : void
      {
         var i:int = 0;
         DisplayUtil.removeAllChild(ui.actorMc);
         if(this.initLogIdx <= 0)
         {
            this.storyTransition.show("Start_" + this.storyID);
         }
         else
         {
            this.logIndex = this.initLogIdx;
            for(i = 0; i < A15thStoryInfo.dialogReviewArr.length; i++)
            {
               this.reviewPanel.update(this.dialogList[A15thStoryInfo.dialogReviewArr[i] - 1]);
            }
         }
      }
      
      private function onEndTransition(e:*) : void
      {
         if(this._logIndex > this.maxDiaIndex)
         {
            this.hide();
            return;
         }
         ++this.logIndex;
      }
      
      private function get logIndex() : int
      {
         return this._logIndex;
      }
      
      private function set logIndex(value:int) : void
      {
         var bgId:int = 0;
         var bgInfo:Object = null;
         var notShowDes:int = 0;
         var showIDs:Array = null;
         var keepUseImg:Array = null;
         var i:int = 0;
         var showInfo:String = null;
         var oldImg:* = undefined;
         var showID:int = 0;
         var showType:int = 0;
         var mc:DisplayObject = null;
         var swfMc:MovieClip = null;
         var animStr:String = null;
         var animType:int = 0;
         var aniUrlStr:* = undefined;
         this._logIndex = value;
         if(this._logIndex > this.maxDiaIndex)
         {
            this.storyTransition.show("End_" + this.storyID);
            A15thStoryInfo.dialogReviewArr = [];
            A15thStoryInfo.saveAnswerArr = [];
            return;
         }
         this.curDialogXML = this.dialogList[this.logIndex - 1];
         if(String(this.curDialogXML.@BgmID) != "")
         {
            this.playBgm(this.curDialogXML.@BgmID);
         }
         if(String(this.curDialogXML.@SoundID) != "")
         {
            this.playSound(this.curDialogXML.@SoundID);
         }
         if(String(this.curDialogXML.@AnimeID) == "")
         {
            ui.actorMc.visible = true;
            bgId = int(this.curDialogXML.@BgID);
            bgInfo = this.getBgInfo(bgId);
            notShowDes = 0;
            if(bgInfo != null)
            {
               notShowDes = int(bgInfo.NotShowDes);
            }
            if(this.bgInUse != bgId && bgId != 0)
            {
               DisplayUtil.removeAllChild(ui.bgMc);
               ui.bgMc.addChild(this.bgHashMap.getValue(bgId));
               this.bgInUse = bgId;
               if(notShowDes != 1)
               {
                  this.showBgDesc(bgInfo);
                  return;
               }
            }
            if(bgId == 0)
            {
               DisplayUtil.removeAllChild(ui.bgMc);
               this.bgInUse = 0;
            }
            showIDs = String(this.curDialogXML.@ShowID).split("|");
            keepUseImg = [];
            for(i = this.imgInUse.length - 1; i >= 0; i--)
            {
               if(showIDs.indexOf(this.imgInUse[i]) >= 0)
               {
                  keepUseImg.push(this.imgInUse[i]);
               }
               else
               {
                  oldImg = this.imgInUseHash.getValue(this.imgInUse[i]);
                  this.imgHashMap.add(this.imgInUse[i],oldImg);
                  this.imgInUseHash.remove(this.imgInUse[i]);
                  DisplayUtil.removeForParent(oldImg,false);
               }
            }
            this.imgInUse = [];
            for each(showInfo in showIDs)
            {
               if(showInfo != "")
               {
                  showID = int(showInfo.split(",")[0]);
                  if(showID != 0)
                  {
                     showType = int(showInfo.split(",")[1]);
                     if(keepUseImg.indexOf(showID) < 0)
                     {
                        mc = this.imgHashMap.getValue(showID);
                        ui.actorMc.addChild(mc);
                        this.imgInUseHash.add(showID,mc);
                     }
                     else
                     {
                        mc = this.imgInUseHash.getValue(showID);
                     }
                     if(showID < 1000)
                     {
                        mc.alpha = 1;
                        mc.x = -mc.width / 2;
                        mc.y = -280;
                     }
                     else
                     {
                        swfMc = mc as MovieClip;
                        swfMc.alpha = 1;
                        swfMc.gotoAndPlay(1);
                        swfMc.x = -480;
                        swfMc.y = -280;
                     }
                     this.playTween(mc,showType);
                     this.imgInUse.push(showID);
                  }
               }
            }
            this.showingStr = this.curDialogXML.@Txt;
            this.showingStrEnd = 0;
            this.isInShowingTxt = true;
            ui.mainUI.dialogTrigger.triBth.visible = false;
            this.txtTimer.reset();
            this.txtTimer.start();
            this.showHead(this.curDialogXML.@NameID);
         }
         else
         {
            animStr = this.curDialogXML.@AnimeID;
            animType = int(animStr.split(",")[0]);
            if(animType == 1)
            {
               aniUrlStr = this.storyResURL + "Anim/" + animStr.split(",")[1] + ".swf";
               AnimateManager.playFullScreenAnimate(ClientConfig.getResPath(aniUrlStr),function():void
               {
                  SoundManager.stopSoundImmediately();
                  ++logIndex;
               });
            }
            else
            {
               this.storyTransition.show(animStr + "_" + this.curDialogXML.@Txt);
            }
            ui.mainUI.dialogTrigger.wordTxt.text = "";
         }
         if(String(this.curDialogXML.@NameID) == "select")
         {
            Alarm.show("还有啥select的？！");
         }
         this.reviewPanel.update(this.curDialogXML);
         A15thStoryInfo.dialogReviewArr.push(this.logIndex);
      }
      
      private function onTxtShow(e:TimerEvent) : void
      {
         ui.mainUI.dialogTrigger.wordTxt.htmlText = stringBack(this.showingStr.slice(0,this.showingStrEnd));
         ++this.showingStrEnd;
         if(this.showingStrEnd >= this.showingStr.length + 1)
         {
            this.endShowTxt();
         }
      }
      
      private function endShowTxt() : void
      {
         ui.mainUI.dialogTrigger.wordTxt.htmlText = stringBack(this.showingStr);
         this.txtTimer.stop();
         this.isInShowingTxt = false;
         ui.mainUI.dialogTrigger.triBth.visible = true;
         if(String(this.curDialogXML.@ChoiceArr) != "")
         {
            this.showJumpBtn(this.curDialogXML.@JumpTo,this.curDialogXML.@ChoiceArr);
         }
         else if(String(this.curDialogXML.@JumpTo) != "")
         {
            this.jumpToArr = String(this.curDialogXML.@JumpTo).split("|");
         }
      }
      
      private function showBgDesc(bgInfo:Object) : void
      {
         var addSize:Number = 0.21;
         var delayTime:Number = this.logIndex <= 1 ? 0.25 : 0.15;
         ui.bgMc.scaleX = 1 + addSize;
         ui.bgMc.scaleY = 1 + addSize;
         ui.bgMc.x = -960 * addSize / 2;
         ui.bgMc.y = -560 * addSize / 2;
         ui.bgMc.alpha = 0.85;
         TweenLite.to(ui.bgMc,0.45,{
            "scaleX":1,
            "scaleY":1,
            "x":0,
            "y":0,
            "alpha":1,
            "delay":delayTime
         });
         ui.mainUI.visible = false;
         ui.actorMc.visible = false;
         ui.bgDesMc.visible = true;
         ui.bgDesMc.gotoAndStop(1);
         ui.bgDescTxt.text = bgInfo.Name;
         AnimateManager.playMcAnimateWithPromis(ui.bgDesMc).then(function():void
         {
            ui.mainUI.visible = true;
            ui.actorMc.visible = true;
            ui.bgDesMc.visible = false;
            ui.mainUI.dialogTrigger.petHead.visible = false;
            ui.mainUI.dialogTrigger.wordTxt.text = "";
            ui.mainUI.dialogTrigger.nameTxt.text = "";
            ui.mainUI.alpha = 0.2;
            TweenLite.to(ui.mainUI,0.2,{"alpha":1});
            logIndex = logIndex;
         });
         ui.bgDescTxt.x = -180;
         ui.bgDescTxt.alpha = 0;
         TweenLite.to(ui.bgDescTxt,0.95,{
            "x":64,
            "alpha":1
         });
         TweenLite.to(ui.bgDescTxt,0.5,{
            "alpha":0,
            "delay":1.8
         });
      }
      
      private function showJumpBtn(info:String, des:String) : void
      {
         this.jumpToArr = info.split("|");
         var desArr:Array = des.split("|");
         for(var i:int = 0; i < desArr.length; )
         {
            ui.mainUI["choice_" + (i + 1)].visible = true;
            ui.mainUI["choice_" + (i + 1)].choiceTxt.text = desArr[i];
            i++;
         }
         while(i < 5)
         {
            ui.mainUI["choice_" + (i + 1)].visible = false;
            i++;
         }
      }
      
      private function hideJumpBtn() : void
      {
         for(var i:int = 1; i <= 5; i++)
         {
            ui.mainUI["choice_" + i].visible = false;
         }
         this.jumpToArr = null;
      }
      
      private function showHead(nameID:int) : void
      {
         var nameInfo:* = undefined;
         var actorShowIDArr:Array = null;
         var curShowID:int = 0;
         var m_image:Bitmap = null;
         if(nameID == 0)
         {
            ui.mainUI.dialogTrigger.petHead.visible = false;
            ui.mainUI.dialogTrigger.nameTxt.text = " ";
         }
         else
         {
            ui.mainUI.dialogTrigger.petHead.visible = true;
            nameInfo = this.getActotInfo(nameID);
            ui.mainUI.dialogTrigger.nameTxt.htmlText = "<font color=\'#FFFF99\' size=\'16\'>" + nameInfo.Name + "</font>   <font color=\'#99997A\' size=\'14\'>" + nameInfo.Role + "</font> ";
            actorShowIDArr = nameInfo.showIDArr;
            for each(curShowID in this.imgInUse)
            {
               if(actorShowIDArr.indexOf(curShowID) >= 0)
               {
                  ui.mainUI.dialogTrigger.petHead.visible = false;
               }
            }
            if(actorShowIDArr.indexOf(99999) >= 0)
            {
               ui.mainUI.dialogTrigger.petHead.visible = false;
            }
            else if(this.curHeadIDInShow != nameInfo.id && Boolean(ui.mainUI.dialogTrigger.petHead.visible))
            {
               this.curHeadIDInShow = int(nameInfo.id);
               m_image = this.headImgHashMap.getValue(this.curHeadIDInShow);
               DisplayUtil.removeAllChild(ui.mainUI.dialogTrigger.petHead.container);
               ui.mainUI.dialogTrigger.petHead.container.addChild(m_image);
               m_image.x = -40;
               m_image.y = -40;
            }
         }
      }
      
      private function playBgm(idx:String) : void
      {
         if(this.curBGMIdx == idx)
         {
            return;
         }
         if(Boolean(this.bgmSC))
         {
            this.bgmSC.stop();
         }
         this.curBGMIdx = idx;
         if(idx == "0")
         {
            return;
         }
         this.bgmSound = new Sound(new URLRequest(ClientConfig.getResPath(this.storyResURL + "BGM/" + idx + ".mp3")));
         this.bgmSC = this.bgmSound.play(0,999);
         var trans:SoundTransform = this.bgmSC.soundTransform;
         trans.volume = 0;
         this.bgmSC.soundTransform = trans;
         this.bgmTimer.reset();
         this.bgmTimer.start();
      }
      
      private function onBGMTimer(e:*) : void
      {
         var trans:SoundTransform = this.bgmSC.soundTransform;
         trans.volume = this.bgmSC.soundTransform.volume + 0.2;
         this.bgmSC.soundTransform = trans;
         if(Boolean(this.bgmTimer) && this.bgmSC.soundTransform.volume > 1)
         {
            this.bgmTimer.stop();
         }
      }
      
      public function destroyBGM() : void
      {
         if(Boolean(this.bgmSC))
         {
            this.bgmSC.stop();
            this.bgmSC = null;
         }
      }
      
      public function playSound(sName:String) : void
      {
         this.destroySound();
         this._endS = new Sound(new URLRequest(ClientConfig.getResPath(this.storyResURL + "Sound/" + sName + ".mp3")));
         this._endC = this._endS.play(0,1);
      }
      
      public function destroySound() : void
      {
         if(Boolean(this._endC))
         {
            this._endC.stop();
            this._endC = null;
         }
         this._endS = null;
      }
      
      private function loadAllRes() : void
      {
         this.waitLoadArr = A15thStoryInfo.getAllImageResNames(this.storyID);
         this.loadCnt = this.waitLoadArr.length;
         this._loader = new Loader();
         this._loader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.onPNGComplete);
         this._loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         if(this.loadCnt > 0)
         {
            this.loadPNG(this.waitLoadArr.shift());
            this._loadingView = Loading.getLoadingStyle(1,null,"正在加载",false);
            this._loadingView.show();
         }
         else
         {
            this.ready2LoadHead();
         }
         var shape:Shape = new Shape();
         shape = new Shape();
         shape.graphics.beginFill(0,1);
         shape.graphics.drawRect(0,0,MainManager.getStageWidth(),MainManager.getStageHeight());
         shape.graphics.endFill();
         this.loadBlackBg = new Sprite();
         this.loadBlackBg.addChild(shape);
         _ui.addChildAt(this.loadBlackBg,ui.numChildren - 1);
      }
      
      private function loadPNG(pngName:String) : void
      {
         this.curLoadingImgIdx = -1;
         this.curLoadingBgIdx = -1;
         trace("Current Loading:" + pngName);
         if(pngName.indexOf("BG") == 0)
         {
            pngName = pngName.split("_")[1];
            if(pngName.indexOf(".swf") > 0 || int(pngName) > 1000)
            {
               this.curLoadingBgIdx = int(pngName.split(".")[0]);
               this.urlStr = this.storyResURL + "BG/" + this.curLoadingBgIdx + ".swf";
               ResourceManager.getResource(ClientConfig.getResPath(this.urlStr),this.onSWFComplete,"item",3,false);
            }
            else
            {
               this.curLoadingBgIdx = int(pngName);
               this.urlStr = this.storyResURL + "BG/" + this.curLoadingBgIdx + ".jpg";
               this._loader.load(new URLRequest(ClientConfig.getResPath(this.urlStr)));
            }
         }
         else
         {
            this.curLoadingImgIdx = int(pngName);
            if(int(pngName) > 1000)
            {
               this.urlStr = this.storyResURL + "Show/" + this.curLoadingImgIdx + ".swf";
               ResourceManager.getResource(ClientConfig.getResPath(this.urlStr),this.onSWFComplete,"item",3,false);
            }
            else
            {
               this.urlStr = this.storyResURL + "Show/" + this.curLoadingImgIdx + ".png";
               this._loader.load(new URLRequest(ClientConfig.getResPath(this.urlStr)));
            }
         }
      }
      
      private function onPNGComplete(e:Event) : void
      {
         var m_image:Bitmap = new Bitmap((e.currentTarget.content as Bitmap).bitmapData,"auto",true);
         if(this.curLoadingImgIdx < 0 && this.curLoadingBgIdx < 0)
         {
            if(MainManager.isDebug)
            {
               Alarm.show("加载出现异步！ " + e.currentTarget.url);
            }
         }
         if(this.curLoadingImgIdx >= 0)
         {
            this.imgHashMap.add(this.curLoadingImgIdx,m_image);
         }
         else if(this.curLoadingBgIdx >= 0)
         {
            this.bgHashMap.add(this.curLoadingBgIdx,m_image);
         }
         if(this.waitLoadArr.length > 0)
         {
            this.loadPNG(this.waitLoadArr.shift());
            this._loadingView.changePercent(this.loadCnt,this.loadCnt - this.waitLoadArr.length);
         }
         else
         {
            this.ready2LoadHead();
         }
      }
      
      protected function errorHandler(evt:IOErrorEvent) : void
      {
         if(MainManager.isDebug)
         {
            Alarm.show("加载出错！" + this.urlStr,this.hide);
         }
      }
      
      private function onSWFComplete(mc:MovieClip) : void
      {
         if(this.curLoadingImgIdx < 0 && this.curLoadingBgIdx < 0)
         {
            if(MainManager.isDebug)
            {
               Alarm.show("加载出现异步！ mc");
            }
         }
         if(this.curLoadingImgIdx >= 0)
         {
            this.imgHashMap.add(this.curLoadingImgIdx,mc);
         }
         else if(this.curLoadingBgIdx >= 0)
         {
            this.bgHashMap.add(this.curLoadingBgIdx,mc);
         }
         if(this.waitLoadArr.length > 0)
         {
            this.loadPNG(this.waitLoadArr.shift());
            this._loadingView.changePercent(this.loadCnt,this.loadCnt - this.waitLoadArr.length);
         }
         else
         {
            this.ready2LoadHead();
         }
      }
      
      private function ready2LoadHead() : void
      {
         this.isNeedLoadHead = true;
         refresh();
      }
      
      private function loadAllHeadPNG() : void
      {
         var d:* = undefined;
         var nameInfo:* = undefined;
         this.waitLoadArr = [];
         this.loadCnt = 0;
         for each(d in this.dialogList)
         {
            if(int(d.@NameID) > 0)
            {
               nameInfo = this.getActotInfo(int(d.@NameID));
               if(nameInfo != null)
               {
                  if(this.waitLoadArr.indexOf(int(nameInfo.id)) < 0)
                  {
                     this.waitLoadArr.push(int(nameInfo.id));
                  }
               }
            }
         }
         this.loadCnt = this.waitLoadArr.length;
         if(this.loadCnt > 0)
         {
            this.loadHeadPNG(this.waitLoadArr.shift());
         }
         else
         {
            this.onPNGLoadCompleted();
            this._loadingView.close();
         }
      }
      
      private function loadHeadPNG(pngName:int) : void
      {
         this.curLoadingHeadIdx = -1;
         trace("Current Loading Head:" + pngName);
         var headUrlStr:* = this.storyResURL + "Head/" + pngName + ".png";
         this.curLoadingHeadIdx = pngName;
         this._loaderHead.load(new URLRequest(ClientConfig.getResPath(headUrlStr)));
      }
      
      private function onPNGComplete_Head(e:Event) : void
      {
         var m_image:Bitmap = new Bitmap((e.currentTarget.content as Bitmap).bitmapData,"auto",true);
         if(this.curLoadingHeadIdx < 0)
         {
            if(MainManager.isDebug)
            {
               Alarm.show("加载出现异步！ " + e.currentTarget.url);
            }
         }
         this.headImgHashMap.add(this.curLoadingHeadIdx,m_image);
         if(this.waitLoadArr.length > 0)
         {
            this.loadHeadPNG(this.waitLoadArr.shift());
            this._loadingView.changePercent(this.loadCnt,this.loadCnt - this.waitLoadArr.length);
         }
         else
         {
            this.onPNGLoadCompleted();
            this._loadingView.close();
         }
      }
      
      private function onPNGLoadCompleted() : void
      {
         this.playEnterTransitionAnim();
         TweenLite.to(this.loadBlackBg,0.3,{
            "alpha":0.1,
            "onComplete":function():void
            {
               _ui.removeChild(loadBlackBg);
            },
            "delay":1
         });
      }
      
      private function onHeadComp(e:Event) : void
      {
         var m_image:Bitmap = new Bitmap((e.currentTarget.content as Bitmap).bitmapData,"auto",true);
         DisplayUtil.removeAllChild(ui.mainUI.dialogTrigger.petHead.container);
         ui.mainUI.dialogTrigger.petHead.container.addChild(m_image);
         m_image.x = -40;
         m_image.y = -40;
      }
      
      protected function errorHeadHandler(evt:IOErrorEvent) : void
      {
         if(MainManager.isDebug)
         {
            Alarm.show("头像加载出错！" + this.curLoadingHeadIdx);
         }
      }
      
      private function playTween(dis:DisplayObject, tweenType:int) : void
      {
         var duration:Number;
         var target:Number = NaN;
         var oldY:Number = NaN;
         var length:Number = NaN;
         var time:Number = NaN;
         var oldX:Number = NaN;
         if(tweenType <= 0)
         {
            return;
         }
         this.isInTween = true;
         duration = 0.5;
         switch(tweenType)
         {
            case 1:
               target = dis.y;
               dis.y -= dis.height * 0.38 > 20 ? 20 : dis.height * 0.38;
               dis.alpha = 0.2;
               TweenLite.to(dis,duration,{
                  "y":target,
                  "alpha":1,
                  "onComplete":function():void
                  {
                     isInTween = false;
                  }
               });
               break;
            case 2:
               target = dis.y + (dis.height * 0.38 > 20 ? 20 : dis.height * 0.38);
               dis.alpha = 1;
               TweenLite.to(dis,duration - 0.1,{
                  "y":target,
                  "alpha":0,
                  "onComplete":function():void
                  {
                     isInTween = false;
                  }
               });
               break;
            case 4:
               oldY = dis.y;
               length = 8;
               time = 0.16;
               TweenLite.delayedCall(time / 2,function():void
               {
                  TweenLite.to(dis,time,{
                     "y":oldY + length,
                     "onComplete":function():void
                     {
                        TweenLite.to(dis,time,{
                           "y":oldY,
                           "onComplete":function():void
                           {
                              TweenLite.to(dis,time,{
                                 "y":oldY + length,
                                 "onComplete":function():void
                                 {
                                    TweenLite.to(dis,time,{
                                       "y":oldY,
                                       "onComplete":function():void
                                       {
                                          isInTween = false;
                                       }
                                    });
                                 }
                              });
                           }
                        });
                     }
                  });
               });
               break;
            case 3:
               oldX = dis.x;
               length = 2;
               time = 0.05;
               TweenLite.delayedCall(time,function():void
               {
                  TweenLite.to(dis,time,{
                     "x":oldX + length,
                     "onComplete":function():void
                     {
                        TweenLite.to(dis,time,{
                           "x":oldX - length,
                           "onComplete":function():void
                           {
                              TweenLite.to(dis,time,{
                                 "x":oldX + length,
                                 "onComplete":function():void
                                 {
                                    TweenLite.to(dis,time,{
                                       "x":oldX - length,
                                       "onComplete":function():void
                                       {
                                          TweenLite.to(dis,time,{
                                             "x":oldX,
                                             "onComplete":function():void
                                             {
                                                isInTween = false;
                                             }
                                          });
                                       }
                                    });
                                 }
                              });
                           }
                        });
                     }
                  });
               });
               break;
            default:
               trace("未定义动画 " + tweenType);
         }
      }
      
      private function calculateAnswerSave(AnswerID:String, jumpId:String) : int
      {
         if(AnswerID == "")
         {
            return -1;
         }
         var sIdx:int = int(AnswerID.split("|")[0]);
         var arr:Array = AnswerID.split("|")[1].split(",");
         var cIdx:int = int(arr.indexOf(jumpId));
         if(cIdx < 0)
         {
            cIdx = 0;
         }
         if(cIdx >= arr.length)
         {
            cIdx = arr.length - 1;
         }
         return sIdx * 100 + cIdx + 1;
      }
      
      private function getActotInfo(nameId:int) : Object
      {
         var i:* = undefined;
         for each(i in this.actorInfoList)
         {
            if(int(i.id) == nameId)
            {
               return i;
            }
         }
         if(MainManager.isDebug)
         {
            Alarm.show("json缺少actor配置 " + nameId);
         }
         return null;
      }
      
      private function getBgInfo(bgId:int) : Object
      {
         var i:* = undefined;
         if(bgId == 0)
         {
            return null;
         }
         for each(i in this.bgInfoList)
         {
            if(int(i.id) == bgId)
            {
               return i;
            }
         }
         if(MainManager.isDebug)
         {
            Alarm.show("json缺少bg配置 " + bgId);
         }
         return null;
      }
      
      private function checkSafe() : void
      {
         var asi:* = undefined;
         var _storyID:int = 0;
         var sxml:XML = null;
         var dList:XMLList = null;
         var didx:int = 0;
         var idxRecord:int = 0;
         var d:* = undefined;
         var arr1:Array = null;
         var arr2:Array = null;
         if(!A15thStoryInfo.DebugAllow)
         {
            return;
         }
         var allStoryInfo:Array = A15thStoryInfo.getAllStoryName();
         for each(asi in allStoryInfo)
         {
            _storyID = int(asi.ID);
            sxml = A15thStoryInfo.getStoryXML(_storyID);
            if(int(sxml.@Type) == 1)
            {
               dList = sxml.elements("dialog");
               didx = 0;
               idxRecord = 0;
               for each(d in dList)
               {
                  if(int(d.@ID) != idxRecord + 1)
                  {
                     Alarm.show("dialog序号需要顺序！！ StoryID:" + _storyID + "  dialogID:" + d.@ID);
                  }
                  if(String(d.@ChoiceArr) != "")
                  {
                     arr1 = String(d.@ChoiceArr).split("|");
                     arr2 = String(d.@JumpTo).split("|");
                     if(arr1.length != arr2.length || String(d.@JumpTo) == "")
                     {
                        Alarm.show("选项的ChoiceArr和AnswerID数量不一致!! StoryID:" + _storyID + "  dialogID:" + d.@ID);
                     }
                  }
                  if(String(d.@ChoiceArr) == "" && String(d.@JumpTo).split("|").length > 1)
                  {
                     Alarm.show("没有选项但跳跃多？？ StoryID:" + _storyID + "  dialogID:" + d.@ID);
                  }
                  idxRecord = int(d.@ID);
                  if(didx == 0 && idxRecord != 1)
                  {
                     Alarm.show("第一句对话从1开始！！！  StoryID:" + _storyID + "  dialogID:" + d.@ID);
                  }
                  didx++;
               }
            }
         }
      }
   }
}

