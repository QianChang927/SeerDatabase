package com.robot.app2.control
{
   import com.robot.app.control.SetupsController;
   import com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillController;
   import com.robot.app.task.control.TaskRoadOfDevildom;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.app2.systems.iconLevel.IconView;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.cmd.MailCmdListener;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.BonusEvent;
   import com.robot.core.event.CountermarkEvent;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObjectContainer;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.DataEvent;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.system.ApplicationDomain;
   import flash.utils.ByteArray;
   import flash.utils.Dictionary;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerController2016
   {
      
      private static var _instance:com.robot.app2.control.NewSeerController2016;
      
      public static const NEWSEER_TASKA_OVER:String = "NewSeerTaskAOver";
      
      public static const GET_FIVEDAY_GIFT:String = "getfivedayGift";
      
      public static const GET_SEVENDAY_GIFT:String = "getsevendayGift";
      
      public static const NEXT_STEP:String = "nextStep";
      
      public static const SELECT_STOREGE_PET:String = "selectStorgePet";
      
      public static const MAP_SUB_CLICK:String = "mapSubClick";
      
      public static const MAP_GLAXY_CLICK:String = "mapGlaxyClick";
      
      public static const Map_LUXICLICK:String = "mapLuxiclick";
      
      public static const CULTURE_PET_SELECT:String = "culturepetSelect";
      
      public static const CULTURE_TAB_SELECT:String = "culturetabSelect";
      
      public static const CULTURE_CLICK:String = "cultureClick";
      
      public static const SHOP_FIRSTTAB_SELECT:String = "shopFirseTabSelect";
      
      public static const EFF_PET_SELECT:String = "effpetSelect";
      
      public static const SHOP_SECONDTAB_SELECT:String = "shopsecondTabSelect";
      
      public static const SHOP_SELECT_ITEM:String = "shopSelectItem";
      
      public static const SHOP_BUY_ITEM:String = "shopBuyItem";
      
      public static const CULTURE_ERROR:String = "cultureError";
      
      public static var culture_free_this_time:Boolean = false;
      
      public static var eff_up_free_this_time:Boolean = false;
      
      public static var countermask_free_this_time:Boolean = false;
      
      public static const TASK_B_OVER:String = "taskBOber";
      
      public static const NEWSEERTASKB_OVER:String = "newseerTaskBOver";
      
      public static var playvipMovie:Boolean = false;
      
      public static const PLAYVIPMOVIE_EVENT:String = "playvipMovie";
      
      public static const CHARACTER_UP_OVER:String = "CharacterUpOver";
      
      public static const ZHAOJILING_OVER:String = "zhaojiling_over";
      
      public static var countermask_not_hide_menu:Boolean = false;
      
      public static var showmap1145task:Boolean = false;
      
      public static const NEWSEER_TASKD_PRO:String = "newseertaskdpro";
      
      public static const NEWSEER_JSD_CLICKED:String = "newseerjsdclicked";
      
      public static var showGodofwarAllianceEvoPanel:Boolean = false;
      
      public static var task116Deal:Boolean = false;
      
      public static var startstep116:Boolean;
       
      
      public var nowStep:int = 0;
      
      private var configXml:XML;
      
      private var _steps:Dictionary;
      
      private var maskmovies:MovieClip;
      
      private var dialogmcleft:MovieClip;
      
      private var dialogmcright:MovieClip;
      
      private var taskstate:int;
      
      private var seericonmc:MovieClip;
      
      private var skipbtn:SimpleButton;
      
      private var _domain:ApplicationDomain;
      
      private var curobj:Object;
      
      private var curbigStep:Array;
      
      public var nowsmallStep:int;
      
      private var curbigStepObj:Object;
      
      private var lastStep:int = -1;
      
      private var continuebtn:SimpleButton;
      
      private var pid:int;
      
      private var helpbtnmovie:MovieClip;
      
      private var petBagMovie:MovieClip;
      
      private var ui:MovieClip;
      
      private var curuiName:String;
      
      private var uis:Array;
      
      private var curNamses:Array;
      
      private var panelarr:Array;
      
      private var skipsven:Boolean = false;
      
      private var mcload:Loader;
      
      private var hasnewseerGift:Boolean;
      
      private var isLoginRequest:Boolean = false;
      
      private var newseergiftrewared:Boolean;
      
      private var newseerFiveDayRewardedToday:Boolean = false;
      
      private var newseersevenDayRewardedToday:Boolean = false;
      
      private var fightMovie:MovieClip;
      
      private var addbtnsid:int;
      
      private var mapmovie:MovieClip;
      
      private var spefunarr:Array;
      
      private var framemoviemc:MovieClip;
      
      private var subframemmovies:Array;
      
      private var subStopFrames:Array;
      
      private var curStopArr:Array;
      
      private var setid:uint;
      
      private var masktimeoutid:int;
      
      private var isPlayAutoMovie:Boolean = false;
      
      private var maskClickFun:String;
      
      private var dialogMasksp:Sprite;
      
      private var panelarrB:Array;
      
      private var dealingTaskB:Boolean = false;
      
      public function NewSeerController2016()
      {
         var loader:SeerUrlLoader;
         var url:String;
         this.panelarr = ["ADPetBagPanelNew","ExpAdmPanel","ExshiwExpPanel","GetNewseerGiftPanel","GetmusiPanel","GetgaiyaPanel","GetkaxiusiPanel","GetbulaikaPanel","NewSeerGetExpPanel","SkillAwakePanel","GetNeerTianfuPanel","NewseerGodofwarAlliancePanel"];
         this.spefunarr = [this.specialfun];
         this.panelarrB = ["ADPetBagPanelNew","DragonKingMainPanel","SptVanguardFightMainPanel","NewseerSpiriteCulturePanel","SkillAwakePanel","NewseerTrainItemBuyPanel","NewseerBattlePathMainPanel","NewSeerVillageCulturePanel","PetStorage","CountermarkForgePanel","PetCulturePanel","SupermarketPanel","PetEffectStrengthenPanel2015","SpiritefeaturesPanel","WorldMapPanel","UpgradeBaseEntryPanel","NovicebattlefieldMainPanel","Novicebattlefields1Panel","LeiyiEvoRoadPanel"];
         super();
         SocketConnection.send(CommandID.ACTIVEACHIEVE,2);
         SocketConnection.send(CommandID.ACTIVEACHIEVE,64);
         SocketConnection.send(CommandID.ACTIVEACHIEVE,10);
         loader = new SeerUrlLoader("加载配置文件");
         url = "xml/newguideStep.xml";
         loader.doLoad(ClientConfig.getResPath(url),function(param1:*):void
         {
            configXml = new XML(param1);
            parsexml();
            loadsourece();
         });
      }
      
      public static function getinstance() : com.robot.app2.control.NewSeerController2016
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.NewSeerController2016();
         }
         return _instance;
      }
      
      public static function npcClick() : void
      {
         var _loc1_:String = "";
         _loc1_ = "哈哈，果然是聪明勇敢的小赛尔。这份特性开启晶片Ω送给你，快来帮我开启特性，增强战力吧！";
         NpcDialog.show(NPC.LEI_XIAO_YI,[_loc1_],null,null,false,clickOverHandle);
      }
      
      private static function clearmapObj() : void
      {
         var _loc2_:int = 0;
         var _loc1_:Object = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").getMapObjetByName("NewseerLeixiaoyi");
         if(_loc1_)
         {
            if(getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs)
            {
               _loc2_ = int(getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs.indexOf(_loc1_));
               if(_loc2_ != -1)
               {
                  getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs.splice(_loc2_,1);
               }
            }
            _loc1_.destory();
         }
      }
      
      private static function clickOverHandle() : void
      {
         SocketConnection.sendByQueue(43691,[5,2],function(param1:*):void
         {
            var e:* = param1;
            Alert.show("快去背包使用道具给雷小伊开启特性吧!",function():void
            {
               ModuleManager.showAppModule("ADPetBagPanelNew");
            });
         });
         clearmapObj();
      }
      
      public static function onshichangbuClick() : void
      {
         navigateToURL(new URLRequest("http://asw.61.com/events/201601newer/?tad=innermedia.seer.free.innericon"),"_blank");
      }
      
      public static function showLeixiaoyiPow(param1:int, param2:Function = null) : void
      {
         var pow:int = param1;
         var fun:Function = param2;
         getinstance().showMasksp(3,0.6,LevelManager.appLevel);
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0122/leiyiup1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.addFrameScript(22,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            mc.addFrameScript(26,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            mc.addFrameScript(40,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.addFrameScript(22,null);
               mc.addFrameScript(26,null);
               mc.addFrameScript(40,null);
               LevelManager.appLevel.removeChild(mc);
               getinstance().removeMaskSp();
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      public static function showLeiyiPow(param1:int, param2:Function = null) : void
      {
         var pow:int = param1;
         var fun:Function = param2;
         getinstance().showMasksp(3,0.6,LevelManager.appLevel);
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0122/leiyiup2"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.addFrameScript(20,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            mc.addFrameScript(24,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            mc.addFrameScript(37,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.addFrameScript(20,null);
               mc.addFrameScript(24,null);
               mc.addFrameScript(37,null);
               LevelManager.appLevel.removeChild(mc);
               getinstance().removeMaskSp();
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      public static function showLeiyiWingsPow(param1:int, param2:Function = null, param3:DisplayObjectContainer = null) : void
      {
         var pow:int = param1;
         var fun:Function = param2;
         var parent:DisplayObjectContainer = param3;
         if(parent)
         {
            getinstance().showMasksp(3,0.6,parent);
         }
         else
         {
            getinstance().showMasksp(3,0.6,LevelManager.appLevel);
         }
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0122/leiyiup3"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.addFrameScript(29,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            mc.addFrameScript(33,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            mc.addFrameScript(46,function():void
            {
               if(mc["pow"])
               {
                  KTool.showScore(mc["pow"]["mc"],pow);
               }
            });
            if(parent)
            {
               parent.addChild(mc);
            }
            else
            {
               LevelManager.appLevel.addChild(mc);
            }
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.addFrameScript(29,null);
               mc.addFrameScript(33,null);
               mc.addFrameScript(46,null);
               if(mc.parent)
               {
                  mc.parent.removeChild(mc);
               }
               getinstance().removeMaskSp();
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      public static function playEvomovie(param1:int, param2:Function = null) : void
      {
         var type:int = param1;
         var fun:Function = param2;
         getinstance().showMasksp(3,0.6,LevelManager.appLevel);
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0122/leiyitalk" + type),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               LevelManager.appLevel.removeChild(mc);
               getinstance().removeMaskSp();
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      public static function playEvoSucMovie(param1:String, param2:Function = null) : void
      {
         var str:String = param1;
         var fun:Function = param2;
         getinstance().showMasksp(3,0.6,LevelManager.appLevel);
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0122/" + str),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               LevelManager.appLevel.removeChild(mc);
               getinstance().removeMaskSp();
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      private function addTaskAEvent() : void
      {
         ToolBarController.panel.closeMap();
         ToolBarController.panel.showMapLock();
         ToolBarController.panel.showNewseermc();
         ModuleManager.addEventListener(ModuleManager.MODEL_SHOW,this.onModuleLoad);
         EventManager.addEventListener(BonusEvent.BONUS_RECEIVE,this.onBonusReceive);
         EventManager.addEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,this.onbagalarmClick);
         EventManager.addEventListener(ItemEvent.PET_IN_BAG_ALARM_CLICK,this.onpetbagalarmClick);
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,this.onClosePanel);
         EventManager.addEventListener("newseerExshiwExpPanelTabClick",this.newseerExshiwExpPanelTabClick);
         EventManager.addEventListener("newseerExshiwExpPanelpetClick",this.petclick);
         EventManager.addEventListener("newseerpetbagpetClick",this.newseerPetbagClick);
         EventManager.addEventListener("alarmClick",this.alertHandle);
         EventManager.addEventListener("alertClick",this.alertHandle);
         EventManager.addEventListener("skillSelected",this.skillSelected);
         EventManager.addEventListener("changeskillSuccess",this.changeskillSuccess);
         EventManager.addEventListener("newseerExshiwExpupdatesuc",this.newseerExshiwExpupdatesuc);
         EventManager.addEventListener("use300699",this.use300699);
         EventManager.addEventListener("propitemuse",this.propitemuse);
         EventManager.addEventListener("rewardMiruisi",this.rewardMiruisi);
         EventManager.addEventListener("petbagBtnstateChange",this.petbagBtnstateChange);
         EventManager.addEventListener("oldskillSelected",this.oldskillSelected);
         EventManager.addEventListener("newskillSelected",this.newskillSelected);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.petFightHandle);
         SocketConnection.addCmdListener(47332,this.socketHandle);
      }
      
      private function socketHandle(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         var bytearr:ByteArray = e.data as ByteArray;
         this.pid = bytearr.readUnsignedInt();
         Alarm.show("你已经拥有" + PetXMLInfo.getName(this.pid),function():void
         {
            if(pid == 2311)
            {
               dealnewseerTask(3,1);
            }
            else if(pid == 1633)
            {
               dealnewseerTask(4,1);
            }
            else if(pid == 261)
            {
               dealnewseerTask(5,1);
            }
            else if(pid == 798)
            {
               dealnewseerTask(10,1);
            }
            else if(pid == 875)
            {
               dealnewseerTask(14,1);
            }
            else if(pid == 1069)
            {
               StatManager.sendStat2014("16年1月基础","进入米咔前置剧情","新手任务");
               showAllToolIcons();
            }
         });
      }
      
      private function petFightHandle(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         this.updatestate(false,function():void
         {
         });
      }
      
      private function oldskillSelected(param1:DynamicEvent) : void
      {
         if(this.nowStep == 8)
         {
            this.dealnewseerTask(8,7);
         }
      }
      
      private function newskillSelected(param1:DynamicEvent) : void
      {
      }
      
      private function rewardMiruisi(param1:DynamicEvent) : void
      {
         this.updatestate();
      }
      
      private function use300699(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         SocketConnection.sendByQueue(43687,[11],function(param1:*):void
         {
            var e:* = param1;
            updatestate(false,function():void
            {
               dealnewseerTask(12,1);
            });
         },function(param1:*):void
         {
            updatestate();
         });
      }
      
      private function propitemuse(param1:DynamicEvent) : void
      {
         if(param1.paramObject.id == 300699)
         {
            this.dealnewseerTask(11,7);
         }
      }
      
      private function newseerExshiwExpupdatesuc(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         SocketConnection.sendByQueue(43687,[7],function(param1:*):void
         {
            var e:* = param1;
            updatestate(false,function():void
            {
               dealnewseerTask(8,1);
            });
         },function(param1:*):void
         {
            updatestate();
         });
      }
      
      private function changeskillSuccess(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         if(this.nowStep == 8)
         {
            SocketConnection.sendByQueue(43687,[8],function(param1:*):void
            {
               var e:* = param1;
               updatestate(false,function():void
               {
                  dealnewseerTask(9,1);
               });
            },function(param1:*):void
            {
               updatestate();
            });
         }
      }
      
      private function skillSelected(param1:DynamicEvent) : void
      {
         if(this.nowStep == 8)
         {
            this.dealnewseerTask(8,8);
         }
      }
      
      private function alertHandle(param1:DynamicEvent) : void
      {
         var _loc2_:String = String(param1.paramObject);
         if(_loc2_.indexOf("好像更喜欢你了呢") != -1)
         {
            this.dealnewseerTask(8,3);
         }
         else if(_loc2_.indexOf("存入你的经验分配器中") != -1)
         {
            if(!this.skipsven)
            {
               this.dealnewseerTask(7,3);
            }
            else
            {
               this.skipsven = false;
               LevelUpAndNewSkillController.instance.closePanel();
               ModuleManager.hideAllModule();
               ModuleManager.showAppModule("ADPetBagPanelNew");
               this.nowStep = 8;
               this.lastStep = this.nowStep - 1;
               this.curbigStepObj = this._steps[this.nowStep];
               this.curbigStep = this.curbigStepObj.arr;
               this.nowsmallStep = 2;
               this.dealnewseerTask(8,3);
            }
         }
         else if(_loc2_.indexOf("升级吗") != -1)
         {
         }
      }
      
      private function newseerPetbagClick(param1:DynamicEvent) : void
      {
         if(this.nowStep == 11 && this.nowsmallStep == 5)
         {
            if(param1.paramObject.id != 2311)
            {
               Alarm2.show("请选择精灵雷小伊，不要看错啦！",null,false,false,false,LevelManager.stage);
            }
         }
      }
      
      private function petclick(param1:DynamicEvent) : void
      {
         if(this.nowStep == 7 && this.nowsmallStep == 4)
         {
         }
      }
      
      private function newseerExshiwExpPanelTabClick(param1:Event) : void
      {
         this.dealnewseerTask(6,10);
      }
      
      private function onClosePanel(param1:DataEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:String = param1.data as String;
         if(_loc2_.indexOf("AddnewMenberTipPanel") != -1)
         {
            this.donext();
            return;
         }
         if(Boolean(this.curuiName) && _loc2_.indexOf(this.curuiName) == -1)
         {
            if(Boolean(this.curNamses) && Boolean(this.uis))
            {
               _loc3_ = this.curNamses.indexOf(this.curuiName);
               if(_loc3_ != -1)
               {
                  this.uis.splice(_loc3_,1);
                  this.curNamses.splice(_loc3_,1);
               }
            }
            return;
         }
      }
      
      private function onBonusReceive(param1:BonusEvent) : void
      {
      }
      
      private function onpetbagalarmClick(param1:DynamicEvent) : void
      {
         var _loc2_:Object = param1.paramObject;
         if(_loc2_.id == 2311)
         {
            this.dealnewseerTask(3,1);
         }
         else if(_loc2_.id == 1633)
         {
            this.dealnewseerTask(4,1);
         }
         else if(_loc2_.id == 261)
         {
            this.dealnewseerTask(5,1);
         }
         else if(_loc2_.id == 798)
         {
            this.dealnewseerTask(10,1);
         }
         else if(_loc2_.id == 875)
         {
            this.dealnewseerTask(14,1);
         }
         else if(_loc2_.id == 1069)
         {
            StatManager.sendStat2014("16年1月基础","进入米咔前置剧情","新手任务");
            this.showAllToolIcons();
         }
      }
      
      private function showAllToolIcons() : void
      {
         ToolBarController.panel.hidebtnByNames([]);
         ToolBarController.panel.hideMapLock();
         this.removeMaskSp();
         this.dealToolbarlock(null);
         ModuleManager.showAppModule("MikaGiftPrePanel");
         showGodofwarAllianceEvoPanel = true;
      }
      
      private function showPetBag() : void
      {
         var tmpstr:String = null;
         if(this.petBagMovie)
         {
            this.petBagMovie.x = 708.1;
            this.petBagMovie.y = 270.3;
            tmpstr = String(this.curbigStepObj.tool);
            tmpstr += ":petBtn";
            this.dealToolbar(tmpstr);
            LevelManager.stage.addChild(this.petBagMovie);
            this.showMasksp(3,0.1);
            StatManager.sendStat2014("16年1月基础","对话框结束，开始播放锁背包按钮动画","新手任务");
            AnimateManager.playMcAnimate(this.petBagMovie,1,"",function():void
            {
               StatManager.sendStat2014("16年1月基础","背包解锁动画播放完成","新手任务");
               dealToolbar(curbigStepObj.tool);
               LevelManager.stage.removeChild(petBagMovie);
               removeMaskSp();
               donext();
            });
         }
      }
      
      private function onbagalarmClick(param1:DynamicEvent) : void
      {
         var _loc2_:Object = param1.paramObject;
         if(_loc2_.id != 400063)
         {
            if(param1.paramObject.id == 300699)
            {
               this.dealnewseerTask(11,2);
            }
         }
      }
      
      private function onModuleLoad(param1:*) : void
      {
         LevelManager.appLevel.removeEventListener(MouseEvent.CLICK,this.uiclickHandle);
         this.clearuis();
         this.uis = [];
         this.curNamses = [];
         if(Boolean(ModuleManager.hasModule(ClientConfig.getAppModule("ADPetBagPanelNew"))) && Boolean(ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content))
         {
            this.ui = ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content["ui"];
            CommonUI.setEnabled(this.ui.waitBtn,false,true);
            CommonUI.setEnabled(this.ui.petSkillPanel.ReviewsBtn,false,true);
            CommonUI.setEnabled(this.ui.petStorageBtn,false,true);
            this.ui.friend.visible = false;
            this.ui.petInfoPanel.abilityMarkMC.visible = false;
            this.ui.petInfoPanel.skilMarkMC.visible = false;
            this.ui.petInfoPanel.commonMarkMC.visible = false;
            this.ui.petInfoPanel.skillStone.visible = false;
            CommonUI.setEnabled(this.ui.petItemBtn,false,true);
            CommonUI.setEnabled(this.ui.followBtn,false,true);
            CommonUI.setEnabled(this.ui.petExpBtn,false,true);
            CommonUI.setEnabled(this.ui.storageBtn,false,true);
            CommonUI.setEnabled(this.ui.defaultBtn,false,true);
            CommonUI.setEnabled(this.ui.bg.bagIntroBtn,false,true);
            this.ui.petSkillPanel.adBtn1.visible = false;
            this.ui.petSkillPanel.adBtn2.visible = false;
            if(this.nowStep == 6)
            {
               this.dealnewseerTask(6,4);
            }
            if(this.nowStep == 11)
            {
               this.dealnewseerTask(11,5);
            }
         }
         var _loc2_:int = 0;
         while(_loc2_ < this.panelarr.length)
         {
            if(ModuleManager.hasModule(ClientConfig.getAppModule(this.panelarr[_loc2_])))
            {
               this.ui = ModuleManager.getModule(ClientConfig.getAppModule(this.panelarr[_loc2_])).content["ui"];
               this.curuiName = this.panelarr[_loc2_];
               this.uis.push(this.ui);
               this.curNamses.push(this.curuiName);
            }
            _loc2_++;
         }
         if(this.uis.length)
         {
            LevelManager.appLevel.addEventListener(MouseEvent.CLICK,this.uiclickHandle);
         }
      }
      
      private function petbagBtnstateChange(param1:*) : void
      {
      }
      
      private function clearuis() : void
      {
         this.uis = null;
         this.curNamses = null;
      }
      
      private function uiclickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var ename:String = String(e.target.name);
         if(ename == "petExpBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
         {
            this.dealnewseerTask(6,7);
            this.dealnewseerTask(6,13);
         }
         else if(ename == "petItemBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
         {
            this.dealnewseerTask(11,6);
         }
         else if(!((ename == "close2" || ename == "close") && this.curNamses.indexOf("GetNewseerGiftPanel") != -1))
         {
            if(ename == "go" && this.curNamses.indexOf("GetmusiPanel") != -1)
            {
               StatManager.sendStat2014("16年1月基础","开始对战教学1动画","新手任务");
               this.dealnewseerTask(3,2);
            }
            else if(ename == "go" && this.curNamses.indexOf("GetgaiyaPanel") != -1)
            {
               StatManager.sendStat2014("16年1月基础","开始对战教学2动画","新手任务");
               this.dealnewseerTask(4,3);
            }
            else if(ename == "go" && this.curNamses.indexOf("GetkaxiusiPanel") != -1)
            {
               if(this.nowStep == 5)
               {
                  this.dealnewseerTask(5,3);
               }
               else if(this.nowStep == 6)
               {
                  if(this.checkLeixiaoyi())
                  {
                     this.dealnewseerTask(6,2);
                  }
               }
               else if(this.nowStep == 7)
               {
                  if(this.checkLeixiaoyi())
                  {
                     this.dealnewseerTask(7,2);
                  }
               }
               else if(this.nowStep == 8)
               {
                  if(this.checkLeixiaoyi())
                  {
                     this.dealnewseerTask(8,2);
                  }
               }
               else if(this.nowStep == 9)
               {
                  LevelUpAndNewSkillController.instance.closePanel();
                  ModuleManager.showAppModule("KaxiusiFightPanel");
               }
            }
            else if(ename == "go" && this.curNamses.indexOf("NewSeerGetExpPanel") != -1)
            {
               SocketConnection.sendByQueue(43687,[5],function(param1:*):void
               {
                  var e:* = param1;
                  updatestate(false,function():void
                  {
                     dealnewseerTask(6,1);
                  });
               },function(param1:*):void
               {
                  updatestate();
               });
            }
            else if(ename == "expadm" && this.curNamses.indexOf("ExpAdmPanel") != -1)
            {
               this.dealnewseerTask(6,9);
            }
            else if(ename == "exBtn" && this.curNamses.indexOf("ExshiwExpPanel") != -1)
            {
               SocketConnection.sendByQueue(43687,[6],function(param1:*):void
               {
                  var e:* = param1;
                  updatestate(false,function():void
                  {
                     if(nowStep == 7)
                     {
                        dealnewseerTask(7,1);
                     }
                     else
                     {
                        skipsven = true;
                        nowStep = 7;
                        nowsmallStep = 0;
                        lastStep = nowStep - 1;
                        curbigStepObj = _steps[nowStep];
                        curbigStep = curbigStepObj.arr;
                        dealnewseerTask(7,1);
                     }
                  });
               },function(param1:*):void
               {
                  updatestate();
               });
            }
            else if(!(ename == "closeBtn" && this.curNamses.indexOf("ExshiwExpPanel") != -1))
            {
               if(ename == "update_2" && this.curNamses.indexOf("ExpAdmPanel") != -1)
               {
                  this.dealnewseerTask(7,5);
               }
               else if(ename == "skillAwakeBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
               {
                  this.dealnewseerTask(8,6);
               }
               else if(!(ename == "apply" && this.curNamses.indexOf("SkillAwakePanel") != -1))
               {
                  if(ename == "go" && this.curNamses.indexOf("GetbulaikaPanel") != -1)
                  {
                     if(this.nowStep == 10)
                     {
                        this.dealnewseerTask(10,3);
                     }
                     else if(this.nowStep == 11)
                     {
                        if(this.checkLeixiaoyi())
                        {
                           this.dealnewseerTask(11,3);
                        }
                     }
                     else if(this.nowStep == 12)
                     {
                        ModuleManager.showAppModule("BulaikaFightPanel");
                     }
                  }
                  else if(ename == "go" && this.curNamses.indexOf("GetNeerTianfuPanel") != -1)
                  {
                     SocketConnection.sendByQueue(43687,[10],function(param1:*):void
                     {
                        var e:* = param1;
                        updatestate(false,function():void
                        {
                           dealnewseerTask(11,1);
                        });
                     },function(param1:*):void
                     {
                        updatestate();
                     });
                  }
                  else if(ename == "go" && this.curNamses.indexOf("NewseerGodofwarAlliancePanel") != -1 && this.nowStep == 13)
                  {
                     SocketConnection.sendByQueue(43687,[13],function(param1:*):void
                     {
                        updatestate();
                     },function(param1:*):void
                     {
                        updatestate();
                     });
                  }
               }
            }
         }
      }
      
      private function checkLeixiaoyi() : Boolean
      {
         var _loc2_:PetInfo = null;
         var _loc1_:Boolean = false;
         for each(_loc2_ in PetManager.allInfos)
         {
            if(_loc2_.id == 2311)
            {
               _loc1_ = true;
               break;
            }
         }
         if(!_loc1_)
         {
            Alarm.show("请将雷小伊放入出战背包");
            ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
         }
         return _loc1_;
      }
      
      private function loadsourece() : void
      {
         this.mcload = new Loader();
         this.mcload.contentLoaderInfo.addEventListener(Event.COMPLETE,this.onLoad);
         this.mcload.load(new URLRequest(ClientConfig.getAppResource("2016/0108/guidemc")));
      }
      
      private function onLoad(param1:Event) : void
      {
         var e:Event = param1;
         this.mcload.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.onLoad);
         this._domain = this.mcload.contentLoaderInfo.applicationDomain;
         this.seericonmc = this.getSymbolFromLib("iconmc");
         this.maskmovies = this.getSymbolFromLib("maskmc");
         this.dialogmcleft = this.getSymbolFromLib("dialogleft");
         this.dialogmcright = this.getSymbolFromLib("dialogright");
         this.skipbtn = this.getSymbolFromLib("skip");
         this.helpbtnmovie = this.getSymbolFromLib("help");
         this.petBagMovie = this.getSymbolFromLib("petbag");
         this.continuebtn = this.getSymbolFromLib("continuebtn");
         this.seericonmc["gifteff"].mouseChildren = this.seericonmc["gifteff"].mouseEnabled = false;
         this.seericonmc["unioneff"].mouseChildren = this.seericonmc["unioneff"].mouseEnabled = false;
         this.seericonmc["spiriteeff"].mouseChildren = this.seericonmc["spiriteeff"].mouseEnabled = false;
         this.seericonmc.x = 0;
         this.seericonmc.y = -LevelManager.iconLevel.y;
         if(!NewSeerTaskController.isNewSeerTaskADone2016)
         {
            this.addTaskAEvent();
            this.seericonmc.addEventListener(MouseEvent.CLICK,this.clickHande);
            LevelManager.iconLevel.addChild(this.seericonmc);
            this.showicon(null);
            this.updatestate(true);
         }
         else
         {
            LevelManager.iconLevel.y = 0;
            this.dealToolbarlock();
            MapManager.changeMap(MainManager.actorInfo.mapID);
            this.addTaskBEvent();
            KTool.getMultiValue([6906],function(param1:Array):void
            {
               if(param1[0] >= 14)
               {
                  overTaskB();
               }
            });
         }
      }
      
      private function clickHande(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "gift":
               ModuleManager.showAppModule("GetNewseerGiftPanel");
               break;
            case "union":
               ModuleManager.showAppModule("NewseerGodofwarAlliancePanel");
               break;
            case "spirite":
               ModuleManager.showAppModule("SendSpiritePanel");
         }
      }
      
      public function getSymbolFromLib(param1:String) : *
      {
         var _loc2_:Object = null;
         var _loc3_:Class = this._domain.getDefinition(param1) as Class;
         if(_loc3_)
         {
            _loc2_ = new _loc3_();
         }
         return _loc2_;
      }
      
      private function updatestate(param1:Boolean = false, param2:Function = null) : void
      {
         var boo:Boolean = param1;
         var func:Function = param2;
         this.isLoginRequest = boo;
         if(!boo)
         {
            EventManager.dispatchEvent(new Event(NEXT_STEP));
         }
         KTool.getMultiValue([8537,2894,15860],function(param1:Array):void
         {
            var _loc2_:* = KTool.getBit(param1[2],2) > 0;
            var _loc3_:Boolean = true;
            newseerFiveDayRewardedToday = KTool.getBit(param1[2],1) > 0;
            newseersevenDayRewardedToday = _loc2_;
            if(param1[1] < 7)
            {
               _loc3_ = false;
            }
            newseergiftrewared = _loc3_;
            if(!_loc3_ && !_loc2_)
            {
               hasnewseerGift = true;
            }
            else
            {
               hasnewseerGift = false;
            }
            taskstate = param1[0];
            checkNowTask(boo);
            if(func != null)
            {
               func();
            }
         });
      }
      
      private function parsexml() : void
      {
         var _loc2_:Object = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc8_:String = null;
         var _loc9_:XML = null;
         var _loc1_:XMLList = this.configXml.steps;
         this._steps = new Dictionary();
         for each(_loc4_ in _loc1_)
         {
            _loc5_ = [];
            _loc3_ = _loc4_.substep;
            _loc6_ = String(_loc4_.@showbtn);
            _loc7_ = String(_loc4_.@sendover);
            _loc8_ = String(_loc4_.@tool);
            for each(_loc9_ in _loc3_)
            {
               _loc2_ = new Object();
               _loc2_.step = int(_loc9_.@step);
               _loc2_.type = int(_loc9_.@type);
               _loc2_.parm = String(_loc9_.@parm);
               _loc2_.auto = int(_loc9_.@auto);
               _loc2_.skip = String(_loc9_.@skip);
               _loc2_.donext = int(_loc9_.@donext);
               _loc2_.closeother = int(_loc9_.@closeother);
               _loc2_.clickfun = String(_loc9_.@clickfun);
               _loc2_.stopframe = String(_loc9_.@stopframe);
               _loc2_.shownoskip = int(_loc9_.@shownoskip);
               _loc2_.notdonext = int(_loc9_.@notdonext);
               _loc5_.push(_loc2_);
            }
            this._steps[int(_loc4_.@step)] = {
               "arr":_loc5_,
               "showbtn":_loc6_,
               "sendover":_loc7_,
               "tool":_loc8_
            };
         }
      }
      
      public function newseerTaskIsOver() : Boolean
      {
         var _loc1_:Boolean = false;
         if(this.taskstate >= 14)
         {
            _loc1_ = true;
         }
         return _loc1_;
      }
      
      private function getNono() : void
      {
         if(MainManager.actorInfo.hasNono == false)
         {
            SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_GET_NONO,null,function(param1:*):void
            {
               MainManager.actorInfo.hasNono = true;
               NonoManager.isBeckon = true;
               SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
               NonoManager.getInfo();
            });
         }
      }
      
      public function checkNowTask(param1:Boolean = false) : void
      {
         var boo:Boolean = param1;
         this.dealingTaskB = false;
         if(this.newseerTaskIsOver())
         {
            this.getNono();
            BitBuffSetClass.setState(23027,1,function():void
            {
               TaskRoadOfDevildom.getInstance().checkMainTask();
               if(!boo)
               {
                  EventManager.dispatchEvent(new Event(NEWSEER_TASKA_OVER));
               }
            });
            this.showicon(["gift","union","spirite"]);
            this.clearTaskA(boo);
            MailCmdListener.isShowTip = false;
            this.checkMapObject();
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 11052)
            {
               if(MapProcessConfig.currentProcessInstance)
               {
                  MapProcessConfig.currentProcessInstance["showMapObjectVisible"](false);
               }
            }
            if(NewSeerTaskController.isNewVersionSeer20170627)
            {
               this.dealToolbarlock();
               this.addTaskBEvent();
            }
         }
         else
         {
            KTool.changeMapWithCallBack(11052,function():void
            {
               var _loc2_:Array = null;
               nowStep = taskstate + 1;
               nowsmallStep = 0;
               if(!isLoginRequest)
               {
                  lastStep = nowStep - 1;
               }
               curbigStepObj = _steps[nowStep];
               curbigStep = curbigStepObj.arr;
               dealToolbar(curbigStepObj.tool);
               if(isLoginRequest)
               {
                  donext(true);
               }
               else if(nowStep != 14)
               {
                  donext();
               }
               var _loc1_:String = String(curbigStepObj.showbtn);
               if(_loc1_ != null && _loc1_ != "")
               {
                  _loc2_ = _loc1_.split(":");
                  showicon(_loc2_);
               }
               else
               {
                  showicon(null);
               }
               checkMapObject();
            });
         }
      }
      
      private function playLeiyiMovie(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getFullMovie("leixiaoyiEvo"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            showMasksp(3);
            mc.gotoAndStop(1);
            LevelManager.stage.addChild(mc);
            mc.addFrameScript(mc.totalFrames - 1,function():void
            {
               mc.addFrameScript(mc.totalFrames - 1,null);
               mc.parent.removeChild(mc);
               if(fun != null)
               {
                  fun();
               }
               removeMaskSp();
            });
            mc.gotoAndPlay(1);
         });
      }
      
      private function checkMapObject() : void
      {
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 11052)
         {
            if(MapProcessConfig.currentProcessInstance)
            {
               if(this.nowStep >= 13)
               {
                  MapProcessConfig.currentProcessInstance["showMapObjectVisible"](false);
               }
               else
               {
                  MapProcessConfig.currentProcessInstance["showMapObjectVisible"](true);
               }
            }
         }
      }
      
      private function dealToolbar(param1:String) : void
      {
         var _loc2_:Array = [];
         if(param1 != null && param1 != "")
         {
            ToolBarController.panel.hidebtnByNames(param1.split(":"));
         }
         else
         {
            ToolBarController.panel.hidebtnByNames(_loc2_);
         }
      }
      
      private function showicon(param1:Array) : void
      {
         var _loc2_:Array = ["gift","union","spirite"];
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(param1)
            {
               if(param1.indexOf(_loc2_[_loc3_]) != -1)
               {
                  this.seericonmc[_loc2_[_loc3_]].visible = true;
                  this.seericonmc[_loc2_[_loc3_] + "eff"].visible = true;
                  if(_loc2_[_loc3_] == "gift")
                  {
                     if(!this.newseersevenDayRewardedToday || this.newseergiftrewared)
                     {
                        this.seericonmc[_loc2_[_loc3_]].visible = false;
                        this.seericonmc[_loc2_[_loc3_] + "eff"].visible = false;
                     }
                  }
                  else if(_loc2_[_loc3_] == "spirite")
                  {
                     if(!this.newseerFiveDayRewardedToday)
                     {
                        this.seericonmc[_loc2_[_loc3_]].visible = false;
                        this.seericonmc[_loc2_[_loc3_] + "eff"].visible = false;
                     }
                  }
               }
               else
               {
                  this.seericonmc[_loc2_[_loc3_]].visible = false;
                  this.seericonmc[_loc2_[_loc3_] + "eff"].visible = false;
               }
            }
            else
            {
               this.seericonmc[_loc2_[_loc3_]].visible = false;
               this.seericonmc[_loc2_[_loc3_] + "eff"].visible = false;
            }
            _loc3_++;
         }
      }
      
      public function refreshShowIcon() : void
      {
         KTool.getMultiValue([8537,2894,15860],function(param1:Array):void
         {
            var _loc5_:Array = null;
            var _loc2_:* = KTool.getBit(param1[2],2) > 0;
            var _loc3_:Boolean = true;
            newseerFiveDayRewardedToday = KTool.getBit(param1[2],1) > 0;
            newseersevenDayRewardedToday = _loc2_;
            if(param1[1] < 7)
            {
               _loc3_ = false;
            }
            newseergiftrewared = _loc3_;
            var _loc4_:String;
            if((_loc4_ = String(curbigStepObj.showbtn)) != null && _loc4_ != "")
            {
               _loc5_ = _loc4_.split(":");
               showicon(_loc5_);
            }
            else
            {
               showicon(null);
            }
         });
      }
      
      private function setLeixiaoyiDefault() : void
      {
         var petinfo:PetInfo = null;
         var _oldInfo:PetInfo = null;
         var petinfo2:PetInfo = null;
         var newInfo:PetInfo = null;
         var found:Boolean = false;
         for each(petinfo in PetManager.infos)
         {
            if(petinfo.id == 2311)
            {
               PetManager.setDefault(petinfo.catchTime);
               found = true;
               break;
            }
         }
         if(!found)
         {
            for each(petinfo2 in PetManager.secondInfos)
            {
               if(petinfo2.id == 2311)
               {
                  _oldInfo = petinfo2;
                  break;
               }
            }
            if(Boolean(_oldInfo) && Boolean(PetManager.infos.length))
            {
               newInfo = PetManager.infos[0];
               PetManager.addEventListener(PetEvent.STORAGE_ADDED,function(param1:PetEvent):void
               {
                  var e:PetEvent = param1;
                  PetManager.removeEventListener(PetEvent.STORAGE_ADDED,arguments.callee);
                  PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                  {
                     PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                     PetManager.storageToInBag(_oldInfo.catchTime);
                  });
                  PetManager.bagToSecondBag(newInfo.catchTime);
               });
               PetManager.secondBagToStorage(_oldInfo.catchTime);
            }
         }
      }
      
      public function dealnewseerTask(param1:int, param2:int, param3:Boolean = false) : void
      {
         if(this.nowStep != param1 || this.nowStep == param1 && param2 != this.nowsmallStep + 1)
         {
            return;
         }
         this.setLeixiaoyiDefault();
         this.hidemask();
         this.nowsmallStep = param2;
         this.curobj = this.curbigStep[this.nowsmallStep - 1];
         if(this.curobj.skip == "1" && this.lastStep == -1)
         {
            this.donext();
            return;
         }
         if(this.curobj.skip == "2" && this.lastStep != -1)
         {
            this.donext();
            return;
         }
         if(param1 == 7)
         {
            LevelUpAndNewSkillController.instance.noshow = true;
         }
         else
         {
            LevelUpAndNewSkillController.instance.noshow = false;
         }
         if(Boolean(ModuleManager.hasModule(ClientConfig.getAppModule("ADPetBagPanelNew"))) && Boolean(ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content))
         {
            this.ui = ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content["ui"];
            if(this.nowStep == 6 && (this.nowsmallStep == 6 || this.nowsmallStep == 9))
            {
               CommonUI.setEnabled(this.ui.petExpBtn,true,true);
            }
            else if(this.nowStep == 11 && this.nowsmallStep == 5)
            {
               CommonUI.setEnabled(this.ui.petItemBtn,true,true);
            }
         }
         switch(this.curobj.type)
         {
            case 1:
               if(this.nowStep == 1 && this.nowsmallStep == 1)
               {
                  StatManager.sendStat2014("2016年1月基础","播放前置剧情全屏动画","新手任务");
               }
               this.playfullmovie(this.curobj);
               break;
            case 2:
               if(this.curobj.closeother == 1)
               {
                  LevelUpAndNewSkillController.instance.closePanel();
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
               }
               ModuleManager.showAppModule(this.curobj.parm);
               if(this.curobj.donext == 1)
               {
                  this.donext();
               }
               break;
            case 3:
               if(this.nowStep == 1 && this.nowsmallStep == 2)
               {
                  StatManager.sendStat2014("16年1月基础","开始场景动画","新手任务");
               }
               else if(this.nowStep == 1 && this.nowsmallStep == 4)
               {
                  StatManager.sendStat2014("16年1月基础","加载雷小伊站起来的动画","新手任务");
               }
               else if(this.nowStep == 2 && this.nowsmallStep == 1)
               {
                  StatManager.sendStat2014("16年1月基础","加载雷小伊伸懒腰动画","新手任务");
               }
               this.playmapMovie(this.curobj);
               break;
            case 4:
               this.subframemmovies = String(this.curobj.parm).split(":");
               this.subStopFrames = String(this.curobj.stopframe).split("|");
               this.playFrameMovie(this.subframemmovies.shift(),true);
               break;
            case 5:
               this.overmapmovie();
               break;
            case 6:
               if(this.nowStep == 1 && this.nowsmallStep == 3)
               {
                  StatManager.sendStat2014("2016年1月基础","弹出第一个对话框","新手任务");
               }
               else if(this.nowStep == 2 && this.nowsmallStep == 2)
               {
                  StatManager.sendStat2014("16年1月基础","弹出这里是赛尔对话框","新手任务");
               }
               this.showDialogLeft(this.curobj);
               break;
            case 7:
               this.showDialogright(this.curobj);
               break;
            case 8:
               this.showMask(this.curobj);
               break;
            case 9:
               this.playFightMovie(this.curobj);
               break;
            case 10:
               this.showPetBag();
         }
      }
      
      private function playFightMovie(param1:Object) : void
      {
         var obj:Object = param1;
         LevelManager.closeMouseEvent();
         LevelManager.removeContentLevel();
         ResourceManager.getResource(ClientConfig.getFullMovie(obj.parm),function(param1:MovieClip):void
         {
            fightMovie = param1;
            fightMovie.gotoAndStop(1);
            fightMovie["mc"].gotoAndStop(1);
            fightMovie.addEventListener(MouseEvent.CLICK,playmovieFunction);
            LevelManager.stage.addChild(fightMovie);
            donext();
         });
      }
      
      private function fightMovieNext(param1:int = 0) : void
      {
         if(this.fightMovie)
         {
            if(this.fightMovie.currentFrame + param1 >= this.fightMovie.totalFrames)
            {
               this.removefightMovie();
               LevelManager.openMouseEvent();
               LevelManager.addLevel();
            }
            else
            {
               this.fightMovie.addEventListener(MouseEvent.CLICK,this.playmovieFunction);
               this.fightMovie.gotoAndStop(this.fightMovie.currentFrame + param1);
               this.fightMovie["mc"].gotoAndStop(1);
            }
         }
         this.donext();
      }
      
      private function removefightMovie() : void
      {
         if(this.fightMovie)
         {
            this.fightMovie.removeEventListener(MouseEvent.CLICK,this.playmovieFunction);
            if(this.fightMovie.parent)
            {
               this.fightMovie.parent.removeChild(this.fightMovie);
            }
            this.fightMovie = null;
         }
      }
      
      public function playmovieFunction(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         this.hidemask();
         this.fightMovie.removeEventListener(MouseEvent.CLICK,this.playmovieFunction);
         AnimateManager.playMcAnimate(this.fightMovie["mc"],1,"",function():void
         {
            fightMovie["mc"].stop();
            fightMovieNext(1);
         });
      }
      
      private function playfullmovie(param1:Object) : void
      {
         var obj:Object = param1;
         if(obj.shownoskip != 1)
         {
            this.addbtnsid = setTimeout(this.addSkipbtn,5000);
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(obj.parm),function():void
         {
            overfullMovie();
         });
      }
      
      private function overfullMovie(param1:Boolean = false) : void
      {
         if(param1)
         {
            if(AnimateManager.AnimatePlaying)
            {
               AnimateManager.destoryFullAnimate();
            }
            return;
         }
         this.removeSkipbtn();
         clearTimeout(this.addbtnsid);
         this.donext();
      }
      
      private function playmapMovie(param1:Object) : void
      {
         var tmparr:Array = null;
         var movieName:String = null;
         var obj:Object = param1;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         if(obj.parm.indexOf(":") != -1)
         {
            tmparr = obj.parm.split(":");
            movieName = String(tmparr[0]);
         }
         else
         {
            movieName = String(obj.parm);
         }
         ResourceManager.getResource(ClientConfig.getMapAnimate(movieName),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            if(nowStep == 1 && nowsmallStep == 4)
            {
               StatManager.sendStat2014("16年1月基础","雷小伊站起来的动画加载成功","新手任务");
            }
            else if(nowStep == 2 && nowsmallStep == 1)
            {
               StatManager.sendStat2014("16年1月基础","雷小伊伸懒腰动画加载成功","新手任务");
            }
            overmapmovie(false);
            mapmovie = mc;
            if(mapmovie["mc2"])
            {
               mapmovie["mc2"].visible = false;
            }
            mapmovie.x = -54.5;
            mapmovie.y = -16.5;
            MapManager.currentMap.controlLevel.addChild(mapmovie);
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 11052)
            {
               if(MapProcessConfig.currentProcessInstance)
               {
                  MapProcessConfig.currentProcessInstance["showMapObjectVisible"](false);
               }
            }
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            AnimateManager.playMcAnimate(mapmovie,1,"",function():void
            {
               mapmovie.stop();
               if(curobj.donext == 1)
               {
                  donext();
               }
               if(nowStep == 1 && nowsmallStep == 4)
               {
                  StatManager.sendStat2014("16年1月基础","雷小伊站起来的动画播放完毕","新手任务");
               }
               if(tmparr)
               {
                  spefunarr[int(tmparr[1])]();
               }
               else
               {
                  donext();
               }
            });
         });
      }
      
      private function specialfun() : void
      {
         this.mapmovie["role"].addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            leiyiCLick(param1);
            mapmovie["role"].removeEventListener(MouseEvent.CLICK,arguments.callee);
         });
      }
      
      private function leiyiCLick(param1:* = null) : void
      {
         StatManager.sendStat2014("2016年1月基础","点击罗杰船长","新手任务");
         this.donext();
      }
      
      private function overmapmovie(param1:Boolean = true) : void
      {
         this.removeSkipbtn();
         if(param1)
         {
            this.checkMapObject();
            LevelManager.iconLevel.visible = true;
            LevelManager.toolsLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
         }
         if(this.mapmovie)
         {
            DisplayUtil.removeForParent(this.mapmovie);
         }
         if(param1)
         {
            this.donext();
         }
      }
      
      private function playFrameMovie(param1:String, param2:Boolean = false) : void
      {
         var url:String = param1;
         var boo:Boolean = param2;
         this.showMasksp(3,1);
         StatManager.sendStat2014("16年1月基础","开始前置剧情漫画","新手任务");
         if(Boolean(this.subStopFrames) && Boolean(this.subStopFrames.length))
         {
            this.curStopArr = this.subStopFrames.shift().split(":");
         }
         else
         {
            this.curStopArr = null;
         }
         LevelManager.closeMouseEvent();
         LevelManager.removeContentLevel();
         ResourceManager.getResource(ClientConfig.getFullMovie(url),function(param1:MovieClip):void
         {
            framemoviemc = param1;
            if(boo)
            {
               addbtnsid = setTimeout(addSkipbtn,2000);
            }
            framemoviemc.addEventListener(MouseEvent.CLICK,nextFrame);
            LevelManager.stage.addChild(framemoviemc);
            framemoviemc.addFrameScript(framemoviemc.totalFrames - 1,toLastFrame);
            framemoviemc.gotoAndPlay(1);
            if(Boolean(skipbtn) && Boolean(skipbtn.parent))
            {
               skipbtn.parent.setChildIndex(skipbtn,skipbtn.parent.numChildren - 1);
            }
         });
      }
      
      private function toLastFrame() : void
      {
         var _loc2_:int = 0;
         var _loc1_:Boolean = false;
         if(Boolean(this.curStopArr) && Boolean(this.curStopArr.length))
         {
            if(this.framemoviemc.currentFrame >= parseInt(this.curStopArr[this.curStopArr.length - 1]))
            {
               _loc1_ = true;
            }
            else
            {
               _loc2_ = 0;
               while(_loc2_ < this.curStopArr.length)
               {
                  if(this.framemoviemc.currentFrame < parseInt(this.curStopArr[_loc2_]))
                  {
                     this.framemoviemc.gotoAndPlay(parseInt(this.curStopArr[_loc2_]));
                     break;
                  }
                  _loc2_++;
               }
            }
         }
         else
         {
            _loc1_ = true;
         }
         if(_loc1_)
         {
            this.framemoviemc.addFrameScript(this.framemoviemc.totalFrames - 1,null);
            this.framemoviemc.gotoAndStop(this.framemoviemc.totalFrames);
            this.setid = setTimeout(this.nextFrame,5000);
         }
      }
      
      private function nextFrame(param1:* = null) : void
      {
         if(this.framemoviemc.currentFrame != this.framemoviemc.totalFrames)
         {
            this.toLastFrame();
         }
         else
         {
            this.overFramemovie();
         }
      }
      
      private function addContinueBtn() : void
      {
         if(!this.continuebtn.parent)
         {
            this.continuebtn.x = 838.95 - 100;
            this.continuebtn.addEventListener(MouseEvent.CLICK,this.nextFrame);
            this.continuebtn.y = 437.65;
            LevelManager.stage.addChild(this.continuebtn);
         }
      }
      
      private function removeContinuebtn() : void
      {
         if(this.continuebtn.parent)
         {
            this.continuebtn.removeEventListener(MouseEvent.CLICK,this.nextFrame);
            this.continuebtn.parent.removeChild(this.continuebtn);
         }
      }
      
      private function overFramemovie(param1:Boolean = false) : void
      {
         clearTimeout(this.setid);
         this.removeMaskSp();
         if(this.framemoviemc)
         {
            this.framemoviemc.addFrameScript(this.framemoviemc.totalFrames - 1,null);
            this.framemoviemc.removeEventListener(MouseEvent.CLICK,this.nextFrame);
            if(this.framemoviemc.parent)
            {
               this.framemoviemc.parent.removeChild(this.framemoviemc);
            }
            this.framemoviemc = null;
            LevelManager.openMouseEvent();
            LevelManager.addLevel();
         }
         if(!param1)
         {
            if(Boolean(this.subframemmovies) && Boolean(this.subframemmovies.length))
            {
               this.playFrameMovie(this.subframemmovies.shift());
            }
            else
            {
               this.donext();
            }
         }
         else
         {
            this.donext();
         }
      }
      
      private function addSkipbtn() : void
      {
         if(!this.skipbtn.parent)
         {
            this.skipbtn.x = 829.35;
            this.skipbtn.y = 15.55;
            LevelManager.stage.addChild(this.skipbtn);
            if(!this.skipbtn.hasEventListener(MouseEvent.CLICK))
            {
               this.skipbtn.addEventListener(MouseEvent.CLICK,this.skipbtnClick);
            }
         }
      }
      
      private function skipbtnClick(param1:MouseEvent) : void
      {
         this.removeSkipbtn();
         if(this.curobj)
         {
            switch(this.curobj.type)
            {
               case 1:
                  this.overfullMovie(true);
                  break;
               case 3:
                  this.overmapmovie();
                  break;
               case 4:
                  StatManager.sendStat2014("16年1月基础","点击漫画跳过按钮","新手任务");
                  this.overFramemovie(true);
            }
         }
      }
      
      private function removeSkipbtn() : void
      {
         if(this.skipbtn)
         {
            if(this.skipbtn.parent)
            {
               this.skipbtn.parent.removeChild(this.skipbtn);
            }
            this.skipbtn.removeEventListener(MouseEvent.CLICK,this.skipbtnClick);
         }
      }
      
      private function showMask(param1:Object, param2:Boolean = true) : void
      {
         var _loc3_:String = null;
         var _loc4_:int = 0;
         if(this.maskmovies)
         {
            if(!this.maskmovies.parent)
            {
               LevelManager.stage.addChild(this.maskmovies);
            }
            this.maskmovies.visible = param2;
            _loc3_ = String(param1.parm);
            if(_loc3_.indexOf(":") != -1)
            {
               _loc4_ = parseInt(_loc3_.split(":")[0]);
               this.masktimeoutid = setTimeout(this.showSendOver,1000 * parseInt(_loc3_.split(":")[1]));
            }
            else
            {
               _loc4_ = parseInt(param1.parm);
            }
            this.maskmovies.gotoAndStop(_loc4_);
            if(this.maskmovies["mc2"])
            {
               this.maskmovies["mc2"].stop();
               this.maskmovies["mc2"].visible = false;
            }
            this.maskClickFun = param1.clickfun;
            if(this.maskClickFun != null && this.maskClickFun != "")
            {
               if(this.maskClickFun == "null")
               {
                  this.maskClickFun = null;
               }
               if(this.maskmovies["mapbtn"])
               {
                  this.maskmovies["mapbtn"].addEventListener(MouseEvent.CLICK,this.maskClickFunction);
               }
               else
               {
                  this.maskmovies.addEventListener(MouseEvent.CLICK,this.maskClickFunction);
               }
            }
            else
            {
               this.maskClickFun = "playrightdierection";
               this.maskmovies.addEventListener(MouseEvent.CLICK,this.maskClickFunction);
            }
            this.isPlayAutoMovie = false;
            if(this.maskmovies["automovie"] != null)
            {
               this.isPlayAutoMovie = true;
               this.maskmovies["automovie"].gotoAndStop(1);
               this.maskmovies["automovie"].addEventListener(Event.ENTER_FRAME,this.maskmovieEnterFrame);
               this.maskmovies["automovie"].gotoAndPlay(1);
            }
         }
      }
      
      private function maskmovieEnterFrame(param1:Event) : void
      {
         if(Boolean(this.maskmovies) && Boolean(this.maskmovies["automovie"]))
         {
            if(this.maskmovies["automovie"].currentFrame == this.maskmovies["automovie"].totalFrames)
            {
               this.maskmovies["automovie"].removeEventListener(Event.ENTER_FRAME,this.maskmovieEnterFrame);
               this.maskmovies["automovie"].gotoAndStop(1);
               this.isPlayAutoMovie = false;
               this.donext();
            }
         }
      }
      
      public function playrightdierection() : void
      {
         if(Boolean(this.maskmovies) && Boolean(this.maskmovies["mc2"]))
         {
            this.maskmovies["mc2"].visible = true;
            this.maskmovies["mc2"].addFrameScript(this.maskmovies["mc2"].totalFrames - 1,function():void
            {
               maskmovies["mc2"].visible = false;
               maskmovies["mc2"].addFrameScript(maskmovies["mc2"].totalFrames - 1,null);
               maskmovies["mc2"].stop();
            });
            this.maskmovies["mc2"].gotoAndPlay(1);
         }
      }
      
      private function maskClickFunction(param1:MouseEvent) : void
      {
         if(this.isPlayAutoMovie)
         {
            return;
         }
         if(this.maskClickFun != null)
         {
            this[this.maskClickFun]();
         }
      }
      
      public function showSendOver() : void
      {
         clearTimeout(this.masktimeoutid);
         this.donext();
      }
      
      public function backtoMapAndOpen() : void
      {
         MapManager.changeMapWithCallback(1224,function():void
         {
            ModuleManager.showAppModule("LeiyiLevelUpNewPanel");
         });
         this.hidemask();
         this.donext();
      }
      
      public function openworldmap() : void
      {
         StatManager.sendStat2014("2017年6月封闭","完成新手A后点击大地图","新手任务");
         ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在加载世界地图....");
      }
      
      public function hidemask() : void
      {
         if(this.maskmovies)
         {
            if(Boolean(this.maskmovies) && Boolean(this.maskmovies["mc2"]))
            {
               this.maskmovies["mc2"].visible = false;
               this.maskmovies["mc2"].addFrameScript(this.maskmovies["mc2"].totalFrames - 1,null);
               this.maskmovies["mc2"].stop();
            }
            this.maskmovies.removeEventListener(MouseEvent.CLICK,this.maskClickFunction);
            if(this.maskmovies.parent)
            {
               this.maskmovies.parent.removeChild(this.maskmovies);
            }
            this.maskmovies.gotoAndStop(1);
         }
      }
      
      private function showDialogLeft(param1:Object, param2:Boolean = true) : void
      {
         var obj:Object = param1;
         var visible:Boolean = param2;
         if(this.dialogmcleft)
         {
            this.showMasksp(1);
            if(!this.dialogmcleft.parent)
            {
               LevelManager.stage.addChild(this.dialogmcleft);
            }
            this.dialogmcleft.x = -832.8;
            this.dialogmcleft.y = 76.25;
            this.dialogmcleft.visible = visible;
            this.dialogmcleft.gotoAndStop(int(obj.parm));
            TweenLite.to(this.dialogmcleft,0.3,{
               "x":-232.8,
               "y":76.25,
               "onComplete":function():void
               {
                  if(!dialogmcleft.hasEventListener(MouseEvent.CLICK))
                  {
                     dialogmcleft.addEventListener(MouseEvent.CLICK,clickHandle);
                  }
               }
            });
         }
      }
      
      private function showMasksp(param1:int, param2:Number = 0.6, param3:DisplayObjectContainer = null) : void
      {
         if(!this.dialogMasksp)
         {
            this.dialogMasksp = new Sprite();
            this.dialogMasksp.graphics.clear();
            this.dialogMasksp.graphics.beginFill(0,param2);
            this.dialogMasksp.graphics.drawRect(0,0,960,560);
            this.dialogMasksp.graphics.endFill();
            if(!this.dialogMasksp.parent)
            {
               if(param3)
               {
                  param3.addChild(this.dialogMasksp);
               }
               else
               {
                  LevelManager.stage.addChild(this.dialogMasksp);
               }
            }
            if(param1 == 1)
            {
               this.dialogMasksp.addEventListener(MouseEvent.CLICK,this.clickHandle);
            }
            else if(param1 == 2)
            {
               this.dialogMasksp.addEventListener(MouseEvent.CLICK,this.clickHandleright);
            }
         }
      }
      
      private function removeMaskSp() : void
      {
         if(this.dialogMasksp)
         {
            this.dialogMasksp.graphics.clear();
            this.dialogMasksp.removeEventListener(MouseEvent.CLICK,this.clickHandle);
            this.dialogMasksp.removeEventListener(MouseEvent.CLICK,this.clickHandleright);
            if(this.dialogMasksp.parent)
            {
               this.dialogMasksp.parent.removeChild(this.dialogMasksp);
            }
            this.dialogMasksp = null;
         }
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         this.removeMaskSp();
         if(this.dialogmcleft)
         {
            if(this.dialogmcleft.parent)
            {
               this.dialogmcleft.parent.removeChild(this.dialogmcleft);
            }
            this.dialogmcleft.removeEventListener(MouseEvent.CLICK,this.clickHandle);
         }
         if(this.curobj.notdonext == 1)
         {
            return;
         }
         this.donext();
      }
      
      private function showDialogright(param1:Object, param2:Boolean = true) : void
      {
         var obj:Object = param1;
         var visible:Boolean = param2;
         if(this.dialogmcright)
         {
            this.showMasksp(2);
            if(!this.dialogmcright.parent)
            {
               LevelManager.stage.addChild(this.dialogmcright);
            }
            this.dialogmcright.x = 1800.15;
            this.dialogmcright.y = 269.35;
            this.dialogmcright.visible = visible;
            this.dialogmcright.scaleX = -1;
            this.dialogmcright.gotoAndStop(int(obj.parm));
            TweenLite.to(this.dialogmcright,0.3,{
               "x":1193.15,
               "y":269.35,
               "onComplete":function():void
               {
                  if(!dialogmcright.hasEventListener(MouseEvent.CLICK))
                  {
                     dialogmcright.addEventListener(MouseEvent.CLICK,clickHandleright);
                  }
               }
            });
         }
      }
      
      private function clickHandleright(param1:MouseEvent) : void
      {
         this.removeMaskSp();
         if(this.dialogmcright)
         {
            if(this.dialogmcright.parent)
            {
               this.dialogmcright.parent.removeChild(this.dialogmcright);
            }
            this.dialogmcright.removeEventListener(MouseEvent.CLICK,this.clickHandleright);
         }
         this.donext();
      }
      
      public function donext(param1:Boolean = false) : void
      {
         var tmpnext:int;
         var boo:Boolean = param1;
         if(this.curbigStep == null)
         {
            return;
         }
         tmpnext = this.nowsmallStep + 1;
         if(tmpnext > this.curbigStep.length)
         {
            if(this.curbigStepObj.sendover == "1" && !this.dealingTaskB)
            {
               SocketConnection.sendByQueue(43687,[this.nowStep],function(param1:*):void
               {
                  updatestate();
               },function(param1:*):void
               {
                  updatestate();
               });
            }
            else if(this.dealingTaskB)
            {
               this.dealstepover(this.nowStep);
               this.nowStep = 0;
               this.hidemask();
            }
         }
         else
         {
            if(!this.curbigStep[tmpnext - 1].auto && !boo && this.nowsmallStep == 0 && this.curbigStep[tmpnext - 1].skip == "1")
            {
               return;
            }
            if(!this.curbigStep[tmpnext - 1].auto && !boo && this.nowsmallStep == 0 && this.curbigStep[tmpnext - 1].skip == "2")
            {
               return;
            }
            if(this.curbigStep[tmpnext - 1].auto || this.curbigStep[tmpnext - 1].skip == "1" || this.curbigStep[tmpnext - 1].skip == "2" || boo)
            {
               if(this.dealingTaskB)
               {
                  this.dealnewseerTaskB(this.nowStep,tmpnext);
                  return;
               }
               this.dealnewseerTask(this.nowStep,tmpnext,boo);
            }
         }
      }
      
      public function dealstepover(param1:int) : void
      {
         var tmparr:Array = null;
         var value:int = param1;
         if(value == 118)
         {
            ModuleManager.hideModule(ClientConfig.getAppModule("ADPetBagPanelNew"));
            ModuleManager.destroy(ClientConfig.getAppModule("ADPetBagPanelNew"));
         }
         else if(value == 105)
         {
            StatManager.sendStat2014("16年2月进阶","完成暴雷切技能替换","新手任务");
            Alarm2.show("你已经将暴雷切设为了出战技能，干得漂亮！",function():void
            {
               ModuleManager.hideAllModule();
               ModuleManager.destroyAll();
               SocketConnection.sendByQueue(43691,[1,4],function(param1:*):void
               {
                  var e:* = param1;
                  com.robot.app2.control.NewSeerController2016.showLeixiaoyiPow(500,function():void
                  {
                     com.robot.app2.control.NewSeerController2016.playEvomovie(1,function():void
                     {
                        ModuleManager.showAppModule("NewseerGetLeiyiPanel");
                     });
                  });
               });
            });
         }
         else if(value >= 119 && value <= 125)
         {
            tmparr = [199,120,121,0,0,0,0,0,0,122,0,123,124,125];
            this.showTaskMask(tmparr.indexOf(value));
         }
         else if(value == 127)
         {
            EventManager.dispatchEvent(new Event("step127over"));
         }
         this.dealToolbarlock();
      }
      
      public function showTaskMask(param1:int) : void
      {
         var idx:int = param1;
         ResourceManager.getResource(ClientConfig.getAppResource("system/newSeerVillage/mask"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.stage.addChild(mc);
            mc.gotoAndStop(idx + 1);
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               mc.parent.removeChild(mc);
               mc = null;
            });
         });
      }
      
      private function clearTaskA(param1:Boolean = false) : void
      {
         if(param1)
         {
            ToolBarController.panel.hidebtnByNames([]);
         }
         if(!param1)
         {
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 11052)
            {
               if(MapProcessConfig.currentProcessInstance)
               {
                  MapProcessConfig.currentProcessInstance["showMapObjectVisible"](false);
               }
            }
            if(Boolean(ModuleManager.hasModule(ClientConfig.getAppModule("ADPetBagPanelNew"))) && Boolean(ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content))
            {
               this.ui = ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content["ui"];
               CommonUI.setEnabled(this.ui.waitBtn,true,true);
               CommonUI.setEnabled(this.ui.petSkillPanel.ReviewsBtn,true,true);
               CommonUI.setEnabled(this.ui.petStorageBtn,true,true);
               this.ui.friend.visible = true;
               this.ui.petInfoPanel.abilityMarkMC.visible = true;
               this.ui.petInfoPanel.skilMarkMC.visible = true;
               this.ui.petInfoPanel.commonMarkMC.visible = true;
               this.ui.petInfoPanel.skillStone.visible = true;
               CommonUI.setEnabled(this.ui.petItemBtn,true,true);
               CommonUI.setEnabled(this.ui.followBtn,true,true);
               CommonUI.setEnabled(this.ui.petExpBtn,true,true);
               CommonUI.setEnabled(this.ui.storageBtn,true,true);
               CommonUI.setEnabled(this.ui.defaultBtn,true,true);
               CommonUI.setEnabled(this.ui.bg.bagIntroBtn,true,true);
               this.ui.petSkillPanel.adBtn1.visible = true;
               this.ui.petSkillPanel.adBtn2.visible = true;
            }
         }
         ToolBarController.panel.openMap();
         ToolBarController.panel.hideMapLock();
         ToolBarController.panel.hideNewseermc();
         this.showicon(["gift","union","spirite"]);
         EventManager.removeEventListener("oldskillSelected",this.oldskillSelected);
         EventManager.removeEventListener("newskillSelected",this.newskillSelected);
         EventManager.removeEventListener("petbagBtnstateChange",this.petbagBtnstateChange);
         EventManager.removeEventListener("rewardMiruisi",this.rewardMiruisi);
         EventManager.removeEventListener("use300699",this.use300699);
         EventManager.removeEventListener("propitemuse",this.propitemuse);
         EventManager.removeEventListener("newseerExshiwExpupdatesuc",this.newseerExshiwExpupdatesuc);
         EventManager.removeEventListener("changeskillSuccess",this.changeskillSuccess);
         EventManager.removeEventListener("newseerpetbagpetClick",this.newseerPetbagClick);
         EventManager.removeEventListener("alarmClick",this.alertHandle);
         EventManager.removeEventListener("alertClick",this.alertHandle);
         EventManager.removeEventListener("newseerExshiwExpPanelpetClick",this.petclick);
         EventManager.removeEventListener("newseerExshiwExpPanelTabClick",this.newseerExshiwExpPanelTabClick);
         ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,this.onClosePanel);
         EventManager.removeEventListener(BonusEvent.BONUS_RECEIVE,this.onBonusReceive);
         EventManager.removeEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,this.onbagalarmClick);
         ModuleManager.removeListener(ModuleManager.MODEL_SHOW,this.onModuleLoad);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.petFightHandle);
         SocketConnection.removeCmdListener(47332,this.socketHandle);
         this.removeSkipbtn();
         LevelManager.iconLevel.y = 0;
         if(this.seericonmc)
         {
            if(this.seericonmc.parent)
            {
               this.seericonmc.parent.removeChild(this.seericonmc);
            }
            this.seericonmc.removeEventListener(MouseEvent.CLICK,this.clickHande);
            this.seericonmc = null;
         }
         this.clearuis();
         LevelManager.appLevel.removeEventListener(MouseEvent.CLICK,this.uiclickHandle);
      }
      
      private function addTaskBEvent() : void
      {
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,this.onClosePanelTaskB);
         ModuleManager.addEventListener(ModuleManager.MODEL_SHOW,this.onModuleLoadTaskB);
         EventManager.addEventListener(SELECT_STOREGE_PET,this.selectStoregepet);
         EventManager.addEventListener(CountermarkEvent.HOLE_CLICK,this.holeClick);
         EventManager.addEventListener("newseerpetbagpetClick",this.newseerPetbagClickTaskB);
         EventManager.addEventListener(CountermarkEvent.EQUIP_ON,this.onMarkClick);
         EventManager.addEventListener(CULTURE_PET_SELECT,this.culturepetSelect);
         EventManager.addEventListener(CULTURE_TAB_SELECT,this.cultureTabSelect);
         EventManager.addEventListener(EFF_PET_SELECT,this.effPetSelect);
         EventManager.addEventListener(SHOP_SECONDTAB_SELECT,this.secondtab);
         EventManager.addEventListener(SHOP_SELECT_ITEM,this.shopItem);
         EventManager.addEventListener(SHOP_BUY_ITEM,this.buyshopItem);
         EventManager.addEventListener(MAP_SUB_CLICK,this.mapSubClick);
         EventManager.addEventListener(MAP_GLAXY_CLICK,this.mapGalaxyClick);
         EventManager.addEventListener(Map_LUXICLICK,this.mapLuxiClick);
         EventManager.addEventListener(ItemEvent.PET_IN_BAG_ALARM_CLICK,this.onpetbagalarmClickTaskB);
         MapManager.addEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,this.mapObjInit);
         EventManager.addEventListener(CULTURE_CLICK,this.cultureClick);
         EventManager.addEventListener(CULTURE_ERROR,this.cultureClick);
         EventManager.addEventListener(SHOP_FIRSTTAB_SELECT,this.shopfirstSelect);
         EventManager.addEventListener(CountermarkEvent.MOVE_END,this.moveendHadnle);
         EventManager.addEventListener(CountermarkEvent.PICK_UP_TO_BAG,this.pickUpHadnle);
         EventManager.addEventListener(CountermarkEvent.GRID_CLICK,this.selectcountermarkHandle);
         EventManager.addEventListener("PetPropClass_300065",this.propclassUse);
         EventManager.addEventListener(TASK_B_OVER,this.overTaskB);
         EventManager.addEventListener(PLAYVIPMOVIE_EVENT,this.playVipmovie);
         EventManager.addEventListener(CHARACTER_UP_OVER,this.characterUpOver);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.petFightHandleB);
         EventManager.addEventListener("petFight_Ready",this.startFight);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.mapswitched);
         MapManager.addEventListener("mapnoneedswitch",this.mapswitched);
         EventManager.addEventListener(NEWSEER_TASKD_PRO,this.dealToolbarlock);
         EventManager.addEventListener("newseerFightPathWin",this.newseerFightPathWinHandle);
         EventManager.addEventListener(NewSeerTaskController.NEWSEERTASK_PRO_CHANGE,this.newseerproChangeHandle);
         EventManager.addEventListener("newseerExshiwExpupdatesuc",this.newseerExshiwExpupdatesucTaskBHandle);
         EventManager.addEventListener(NEWSEER_JSD_CLICKED,this.newseerjsdClickHandle);
         EventManager.addEventListener("newskillSelected",this.newskillSelectedbHandle);
         EventManager.addEventListener("changeskillSuccess",this.changeskillSuccessHadnle);
         EventManager.addEventListener("oldskillSelected",this.oldskillSelectedBHandle);
         EventManager.addEventListener("newseerunlock",this.newseerunlockHandle);
         EventManager.addEventListener("newseertaskunlockmovie",this.newseertaskunlockmovieHadnle);
         EventManager.addEventListener("PetProp300849Use",this.petProp300849UseHandle);
         EventManager.addEventListener("PetProp300848Use",this.petProp300848UseHandle);
      }
      
      private function clearTaskB() : void
      {
         ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,this.onClosePanelTaskB);
         ModuleManager.removeListener(ModuleManager.MODEL_SHOW,this.onModuleLoadTaskB);
         EventManager.removeEventListener(SELECT_STOREGE_PET,this.selectStoregepet);
         EventManager.removeEventListener(CountermarkEvent.HOLE_CLICK,this.holeClick);
         EventManager.removeEventListener("newseerpetbagpetClick",this.newseerPetbagClickTaskB);
         EventManager.removeEventListener(CountermarkEvent.EQUIP_ON,this.onMarkClick);
         EventManager.removeEventListener(CULTURE_PET_SELECT,this.culturepetSelect);
         EventManager.removeEventListener(CULTURE_TAB_SELECT,this.cultureTabSelect);
         EventManager.removeEventListener(EFF_PET_SELECT,this.effPetSelect);
         EventManager.removeEventListener(SHOP_SECONDTAB_SELECT,this.secondtab);
         EventManager.removeEventListener(SHOP_SELECT_ITEM,this.shopItem);
         EventManager.removeEventListener(SHOP_BUY_ITEM,this.buyshopItem);
         EventManager.removeEventListener(MAP_SUB_CLICK,this.mapSubClick);
         EventManager.removeEventListener(MAP_GLAXY_CLICK,this.mapGalaxyClick);
         EventManager.removeEventListener(Map_LUXICLICK,this.mapLuxiClick);
         EventManager.removeEventListener(ItemEvent.PET_IN_BAG_ALARM_CLICK,this.onpetbagalarmClickTaskB);
         MapManager.removeEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,this.mapObjInit);
         EventManager.removeEventListener(CULTURE_CLICK,this.cultureClick);
         EventManager.removeEventListener(CULTURE_ERROR,this.cultureClick);
         EventManager.removeEventListener(SHOP_FIRSTTAB_SELECT,this.shopfirstSelect);
         EventManager.removeEventListener(CountermarkEvent.MOVE_END,this.moveendHadnle);
         EventManager.removeEventListener(CountermarkEvent.PICK_UP_TO_BAG,this.pickUpHadnle);
         EventManager.removeEventListener(CountermarkEvent.GRID_CLICK,this.selectcountermarkHandle);
         EventManager.removeEventListener("PetPropClass_300065",this.propclassUse);
         EventManager.removeEventListener(TASK_B_OVER,this.overTaskB);
         EventManager.removeEventListener(PLAYVIPMOVIE_EVENT,this.playVipmovie);
         EventManager.removeEventListener(CHARACTER_UP_OVER,this.characterUpOver);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.petFightHandleB);
         EventManager.removeEventListener("petFight_Ready",this.startFight);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.mapswitched);
         MapManager.removeEventListener("mapnoneedswitch",this.mapswitched);
         EventManager.removeEventListener(NEWSEER_TASKD_PRO,this.dealToolbarlock);
         EventManager.removeEventListener("newseerFightPathWin",this.newseerFightPathWinHandle);
         EventManager.removeEventListener(NewSeerTaskController.NEWSEERTASK_PRO_CHANGE,this.newseerproChangeHandle);
         EventManager.removeEventListener("newseerExshiwExpupdatesuc",this.newseerExshiwExpupdatesucTaskBHandle);
         EventManager.removeEventListener(NEWSEER_JSD_CLICKED,this.newseerjsdClickHandle);
         EventManager.removeEventListener("newskillSelected",this.newskillSelectedbHandle);
         EventManager.removeEventListener("changeskillSuccess",this.changeskillSuccessHadnle);
         EventManager.removeEventListener("oldskillSelected",this.oldskillSelectedBHandle);
         EventManager.removeEventListener("newseerunlock",this.newseerunlockHandle);
         EventManager.removeEventListener("newseertaskunlockmovie",this.newseertaskunlockmovieHadnle);
         EventManager.removeEventListener("PetProp300849Use",this.petProp300849UseHandle);
         EventManager.removeEventListener("PetProp300848Use",this.petProp300848UseHandle);
      }
      
      private function petProp300848UseHandle(param1:Event) : void
      {
         ModuleManager.hideAllModule();
         ModuleManager.destroyAll();
         ModuleManager.showAppModule("LeiyiTiliupPanel");
      }
      
      private function petProp300849UseHandle(param1:Event) : void
      {
         ModuleManager.hideAllModule();
         ModuleManager.destroyAll();
         ModuleManager.showAppModule("LeiyiWingsPanel");
      }
      
      private function newseertaskunlockmovieHadnle(param1:Event) : void
      {
         var e:Event = param1;
         StatManager.sendStat2014("2017年6月封闭","播放三主宠解锁全屏动画","新手任务");
         ModuleManager.hideAllModule();
         ModuleManager.destroyAll();
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("newseertaskunlockmovie"),function():void
         {
            Alert.show("水火草的试炼已经开启，三系主宠等你来拿，现在就要去看看吗？",function():void
            {
               StatManager.sendStat2014("2017年6月封闭","三主宠提示框点击确认跳转","新手任务");
               ModuleManager.showAppModule("ThreePetRedoNewMainPanel");
            },function():void
            {
               StatManager.sendStat2014("2017年6月封闭","三主宠提示框点击取消跳转","新手任务");
               ModuleManager.showAppModule("NewseerTrainTaskPanel");
            });
         });
      }
      
      private function newseerunlockHandle(param1:DynamicEvent) : void
      {
         this.dealToolbarlock();
      }
      
      private function changeskillSuccessHadnle(param1:DynamicEvent) : void
      {
         if(this.nowStep == 105 && this.nowsmallStep == 6)
         {
            this.donext();
         }
      }
      
      private function oldskillSelectedBHandle(param1:DynamicEvent) : void
      {
         if(this.nowStep == 105 && this.nowsmallStep == 5)
         {
            this.dealnewseerTask(105,6);
         }
      }
      
      private function newskillSelectedbHandle(param1:DynamicEvent) : void
      {
         if(this.nowStep == 105 && this.nowsmallStep == 4)
         {
            if(int(param1.paramObject) == 15644)
            {
               StatManager.sendStat2014("16年2月进阶","选中暴雷切后展示遮罩","新手任务");
               this.dealnewseerTask(105,5);
            }
            else
            {
               Alarm2.show("只有暴雷切才有消除强化状态的效果哦，不要找错技能啦！");
            }
         }
      }
      
      private function newseerjsdClickHandle(param1:Event) : void
      {
         if(this.nowStep == 104 && this.nowsmallStep == 3)
         {
            this.dealnewseerTaskB(104,4);
         }
      }
      
      private function newseerExshiwExpupdatesucTaskBHandle(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         PetManager.upDate(function():void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            var _loc4_:PetListInfo = null;
            var _loc1_:Array = PetManager.getBagPetsById(1633,true);
            if(_loc1_.length)
            {
               _loc3_ = 0;
               while(_loc3_ < _loc1_.length)
               {
                  if((_loc4_ = _loc1_[_loc3_] as PetListInfo).level > _loc2_)
                  {
                     _loc2_ = int(_loc4_.level);
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 100 && NewSeerTaskController.newSeer20170627TaskPro == 1)
               {
                  LevelUpAndNewSkillController.instance.closePanel();
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showAppModule("NewseerTrainTaskPanel");
               }
            }
         });
      }
      
      private function newseerproChangeHandle(param1:Event) : void
      {
         var e:Event = param1;
         var pro:int = int(NewSeerTaskController.newSeer20170627TaskPro);
         switch(pro)
         {
            case 1:
               ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel",0);
               break;
            case 2:
               ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel",1);
               break;
            case 8:
               ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel",4);
               break;
            case 11:
               ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel",5);
               break;
            case 14:
               ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel",99);
               break;
            default:
               ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel");
         }
         this.dealToolbarlock();
         IconController.eachIcon(function(param1:IconView):void
         {
            IconController.hideIcon(param1.url);
            IconController.showIcon(param1.url);
         });
         if(pro >= 8)
         {
            IconController.showIcon("newseer_fuli_icon");
         }
      }
      
      private function newseerFightPathWinHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         switch(_loc2_)
         {
            case 1:
               if(NewSeerTaskController.newSeer20170627TaskPro == 2)
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showAppModule("NewseerTrainTaskPanel");
               }
               break;
            case 3:
               if(NewSeerTaskController.newSeer20170627TaskPro == 4)
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showAppModule("NewseerTrainTaskPanel");
               }
               break;
            case 8:
               if(NewSeerTaskController.newSeer20170627TaskPro == 6)
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showAppModule("NewseerTrainTaskPanel");
               }
               break;
            case 11:
               if(NewSeerTaskController.newSeer20170627TaskPro == 9)
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showAppModule("NewseerTrainTaskPanel");
               }
               break;
            case 16:
               if(NewSeerTaskController.newSeer20170627TaskPro == 13)
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showAppModule("NewseerTrainTaskPanel");
               }
         }
      }
      
      private function startFight(param1:Event) : void
      {
         if(this.nowStep == 116)
         {
            this.hidemask();
            task116Deal = true;
         }
      }
      
      private function petFightHandleB(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(this.nowStep == 116)
         {
            KTool.getBitSet([275,276],function(param1:Array):void
            {
               if(param1[0] == 1 && param1[1] == 0)
               {
                  dealnewseerTaskB(116,6);
               }
            });
         }
      }
      
      private function characterUpOver(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(this.nowStep == 114)
         {
            this.dealnewseerTaskB(114,8);
         }
      }
      
      private function playVipmovie(param1:Event) : void
      {
         if(this.nowStep == 105)
         {
            this.dealnewseerTaskB(105,6);
         }
      }
      
      private function propclassUse(param1:DynamicEvent) : void
      {
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(Boolean(_loc2_) && _loc2_.id == 70)
         {
         }
      }
      
      private function pickUpHadnle(param1:CountermarkEvent) : void
      {
         var e:CountermarkEvent = param1;
         KTool.getMultiValue([8545],function(param1:Array):void
         {
            if(KTool.getBit(param1[0],6) > 0 && !BitBuffSetClass.getState(23059))
            {
               BitBuffSetClass.setState(23059,1);
            }
         });
      }
      
      private function selectcountermarkHandle(param1:CountermarkEvent) : void
      {
         if(this.nowStep == 109)
         {
            this.dealnewseerTaskB(109,3);
         }
         else if(this.nowStep == 110)
         {
            this.hidemask();
         }
      }
      
      private function moveendHadnle(param1:CountermarkEvent) : void
      {
         var e:CountermarkEvent = param1;
         if(this.nowStep == 109)
         {
            this.dealnewseerTaskB(109,4);
         }
         KTool.getMultiValue([8545],function(param1:Array):void
         {
            if(KTool.getBit(param1[0],6) > 0 && Boolean(BitBuffSetClass.getState(23059)) && !BitBuffSetClass.getState(23060))
            {
               BitBuffSetClass.setState(23060,1);
            }
         });
      }
      
      private function cultureClick(param1:*) : void
      {
         if(this.nowStep == 111)
         {
            this.dealnewseerTaskB(111,6);
         }
      }
      
      private function mapObjInit(param1:MapEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         if(this.nowStep == 104)
         {
            _loc2_ = int(MapManager.currentMap.id);
            if(_loc2_ == 1147)
            {
               this.hidemask();
               clearmapObj();
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").addNewObjToMapByNameWithOutXml("NewseerLeixiaoyi",200,355);
            }
         }
         else if(startstep116 || showmap1145task)
         {
            _loc3_ = int(MapManager.currentMap.id);
            if(_loc3_ == 1147 && startstep116)
            {
               startstep116 = false;
               this.startTaskB(116);
            }
            else if(_loc3_ == 1145 && showmap1145task)
            {
               showmap1145task = false;
            }
         }
      }
      
      private function mapswitched(param1:MapEvent) : void
      {
         var _loc2_:int = 0;
         if(this.nowStep == 117)
         {
            _loc2_ = int(MapManager.currentMap.id);
            if(_loc2_ == 1224)
            {
               this.dealnewseerTaskB(117,3);
            }
         }
      }
      
      private function onpetbagalarmClickTaskB(param1:DynamicEvent) : void
      {
         if(this.nowStep == 102)
         {
            this.dealnewseerTaskB(102,14);
         }
      }
      
      private function mapLuxiClick(param1:DynamicEvent) : void
      {
      }
      
      private function mapGalaxyClick(param1:DynamicEvent) : void
      {
      }
      
      private function mapSubClick(param1:*) : void
      {
      }
      
      private function buyshopItem(param1:DynamicEvent) : void
      {
         if(this.nowStep == 100)
         {
            if(param1.paramObject.productID == 2)
            {
            }
         }
      }
      
      private function shopItem(param1:DynamicEvent) : void
      {
         if(this.nowStep == 100)
         {
            if(param1.paramObject.productID == 2)
            {
            }
         }
      }
      
      private function shopfirstSelect(param1:DynamicEvent) : void
      {
         if(this.nowStep == 112)
         {
            if(param1.paramObject == 2)
            {
               this.dealnewseerTaskB(112,5);
            }
         }
         else if(this.nowStep == 115)
         {
            if(param1.paramObject == 2)
            {
               this.dealnewseerTaskB(115,4);
            }
         }
      }
      
      private function secondtab(param1:DynamicEvent) : void
      {
         if(this.nowStep == 112)
         {
            if(param1.paramObject.first == 2 && param1.paramObject.second == 4)
            {
               this.dealnewseerTaskB(112,6);
            }
         }
         else if(this.nowStep == 115)
         {
            if(param1.paramObject.first == 2 && param1.paramObject.second == 4)
            {
               this.dealnewseerTaskB(115,5);
            }
         }
      }
      
      private function effPetSelect(param1:DynamicEvent) : void
      {
         if(this.nowStep == 114)
         {
            if(param1.paramObject == 70)
            {
               this.dealnewseerTaskB(114,6);
            }
            else
            {
               Alarm2.show("请选择精灵雷伊，不要看错啦！",null,false,false,false,LevelManager.stage);
            }
         }
      }
      
      private function culturepetSelect(param1:DynamicEvent) : void
      {
         if(this.nowStep == 111)
         {
            if(param1.paramObject == 70)
            {
               this.dealnewseerTaskB(111,4);
            }
            else
            {
               Alarm2.show("请选择精灵雷伊，不要看错啦！",null,false,false,false,LevelManager.stage);
            }
         }
      }
      
      private function cultureTabSelect(param1:DynamicEvent) : void
      {
         if(this.nowStep == 111)
         {
            if(param1.paramObject == 3)
            {
               this.dealnewseerTaskB(111,5);
               culture_free_this_time = true;
            }
         }
      }
      
      private function onMarkClick(param1:CountermarkEvent) : void
      {
         if(this.nowStep == 110 && this.nowsmallStep == 5)
         {
            this.dealnewseerTaskB(110,6);
         }
      }
      
      private function newseerPetbagClickTaskB(param1:DynamicEvent) : void
      {
         if(this.nowStep == 110)
         {
            if(param1.paramObject.id == 70)
            {
               this.dealnewseerTaskB(110,4);
            }
            else
            {
               Alarm2.show("请选择精灵雷伊，不要看错啦！",null,false,false,false,LevelManager.stage);
            }
         }
         else if(this.nowStep == 118 && this.nowsmallStep == 3)
         {
            if(param1.paramObject.id == 1069)
            {
               this.dealnewseerTaskB(118,4);
            }
            else
            {
               Alarm2.show("请选择你的米咔，不要看错啦！",null,false,false,false,LevelManager.stage);
            }
         }
      }
      
      private function holeClick(param1:CountermarkEvent) : void
      {
         var _loc2_:Object = param1.info;
         if(this.nowStep == 110 && this.nowsmallStep == 4)
         {
            this.dealnewseerTaskB(110,5);
         }
         else if(this.nowStep == 110 && this.nowsmallStep == 8)
         {
            this.dealnewseerTaskB(110,9);
         }
         else if(this.nowStep == 107)
         {
            this.dealnewseerTaskB(107,4);
         }
      }
      
      private function selectStoregepet(param1:DynamicEvent) : void
      {
         if(param1.paramObject)
         {
            if(this.nowStep == 102)
            {
               this.dealnewseerTaskB(102,12);
            }
         }
      }
      
      private function onClosePanelTaskB(param1:*) : void
      {
         var _loc2_:String = null;
         var _loc3_:int = 0;
         if(param1 is DataEvent)
         {
            _loc2_ = param1.data as String;
            if(Boolean(this.curuiName) && _loc2_.indexOf(this.curuiName) == -1)
            {
               if(Boolean(this.curNamses) && Boolean(this.uis))
               {
                  _loc3_ = this.curNamses.indexOf(this.curuiName);
                  if(_loc3_ != -1)
                  {
                     this.uis.splice(_loc3_,1);
                     this.curNamses.splice(_loc3_,1);
                  }
               }
               return;
            }
         }
      }
      
      private function onModuleLoadTaskB(param1:DataEvent) : void
      {
         var i:int;
         var catchTime:uint = 0;
         var petinfo:PetInfo = null;
         var skillarr:Array = null;
         var foundskill:Boolean = false;
         var skill:PetSkillInfo = null;
         var e:DataEvent = param1;
         var str:String = e.data as String;
         if(str.indexOf("ADPetBagPanelNew") != -1)
         {
            if(this.nowStep == 101)
            {
               this.dealnewseerTaskB(101,2);
            }
            else if(this.nowStep == 102)
            {
               this.dealnewseerTaskB(102,5);
            }
            else if(this.nowStep == 103)
            {
               this.dealnewseerTaskB(103,2);
            }
            else if(this.nowStep == 106)
            {
               this.dealnewseerTaskB(106,2);
            }
            else if(this.nowStep == 110)
            {
               this.dealnewseerTaskB(110,2);
            }
            else if(this.nowStep == 113)
            {
               this.dealnewseerTaskB(113,2);
            }
            else if(this.nowStep == 114)
            {
               this.dealnewseerTaskB(114,3);
            }
            else if(this.nowStep == 107)
            {
               this.dealnewseerTaskB(107,2);
            }
            else if(this.nowStep == 126)
            {
               this.dealnewseerTaskB(126,3);
            }
         }
         else if(str.indexOf("WorldMapPanel") != -1)
         {
            if(this.nowStep == 104)
            {
               this.dealnewseerTaskB(104,8);
            }
            else if(this.nowStep == 117)
            {
               this.hidemask();
            }
         }
         else if(str.indexOf("PetCulturePanel") != -1)
         {
            if(this.nowStep == 111)
            {
               this.dealnewseerTaskB(111,3);
            }
         }
         else if(str.indexOf("CountermarkForgePanel") != -1)
         {
            if(this.nowStep == 107)
            {
               this.dealnewseerTaskB(107,5);
            }
         }
         else if(str.indexOf("PetEffectStrengthenPanel2015") == -1)
         {
            if(str.indexOf("PetStorage") != -1)
            {
               if(this.nowStep == 102)
               {
                  this.dealnewseerTaskB(102,8);
               }
            }
            else if(str.indexOf("SpiritefeaturesPanel") != -1)
            {
               if(this.nowStep == 103)
               {
                  this.dealnewseerTaskB(103,6);
               }
            }
            else if(str.indexOf("SupermarketPanel") != -1)
            {
               if(this.nowStep == 112)
               {
                  this.dealnewseerTaskB(112,3);
               }
               if(this.nowStep == 115)
               {
                  this.dealnewseerTaskB(115,3);
               }
            }
            else if(str.indexOf("Novicebattlefields1Panel") != -1)
            {
               if(this.nowStep == 116)
               {
                  KTool.getBitSet([275,276],function(param1:Array):void
                  {
                     var arr:Array = param1;
                     if(arr[0] == 0)
                     {
                        KTool.doExchange(8853);
                     }
                     dealnewseerTaskB(116,4);
                     KTool.getMultiValue([14505],function(param1:Array):void
                     {
                        var arr1:Array = param1;
                        if(KTool.getBit(arr1[0],1) == 1)
                        {
                           hidemask();
                           SocketConnection.sendByQueue(43247,[5,0],function(param1:*):void
                           {
                              if(arr[0] == 1 && arr[1] == 0)
                              {
                                 nowsmallStep = 5;
                                 dealnewseerTaskB(116,6);
                              }
                           });
                        }
                     });
                  });
               }
               else if(this.nowStep == 120)
               {
                  this.dealnewseerTaskB(120,3);
               }
            }
            else if(str.indexOf("NovicebattlefieldMainPanel") != -1)
            {
               if(this.nowStep == 116)
               {
                  this.dealnewseerTaskB(116,2);
               }
            }
            else if(str.indexOf("LeiyiEvoRoadPanel") != -1)
            {
               if(this.nowStep == 119)
               {
                  this.donext();
               }
            }
            else if(str.indexOf("NewSeerVillageCulturePanel") != -1)
            {
               if(this.nowStep == 120)
               {
                  this.hidemask();
               }
               else if(this.nowStep == 123)
               {
                  this.dealnewseerTaskB(123,3);
               }
            }
            else if(str.indexOf("NewseerSpiriteCulturePanel") != -1)
            {
               if(this.nowStep == 123)
               {
                  this.donext();
               }
            }
            else if(str.indexOf("NewseerBattlePathMainPanel") != -1)
            {
               if(this.nowStep == 121)
               {
                  this.donext();
               }
            }
            else if(str.indexOf("NewseerTrainItemBuyPanel") != -1)
            {
               if(this.nowStep == 104)
               {
                  this.dealnewseerTaskB(104,5);
               }
            }
            else if(str.indexOf("SkillAwakePanel") != -1)
            {
               if(this.nowStep == 105)
               {
                  this.dealnewseerTaskB(105,4);
                  catchTime = uint(PetManager.defaultTime);
                  petinfo = PetManager.getPetInfo(catchTime);
                  if(Boolean(petinfo) && petinfo.id == 2311)
                  {
                     skillarr = petinfo.skillArray;
                     foundskill = false;
                     for each(skill in skillarr)
                     {
                        if(skill.id == 15644)
                        {
                           foundskill = true;
                           break;
                        }
                     }
                     if(foundskill)
                     {
                        this.nowsmallStep = 6;
                        this.donext();
                     }
                  }
               }
            }
            else if(str.indexOf("SptVanguardFightMainPanel") != -1)
            {
               if(this.nowStep == 124)
               {
                  this.donext();
               }
            }
            else if(str.indexOf("DragonKingMainPanel") != -1)
            {
               this.wanghamoiconclickHandle();
            }
            else if(str.indexOf(TasksXMLInfo.getCurrentTaskMain(SystemTimerManager.sysDate)) != -1)
            {
               if(this.nowStep == 100)
               {
                  this.dealnewseerTaskB(100,2);
               }
            }
         }
         LevelManager.appLevel.removeEventListener(MouseEvent.CLICK,this.uiclickHandle2);
         this.clearuis();
         this.uis = [];
         this.curNamses = [];
         i = 0;
         while(i < this.panelarrB.length)
         {
            if(ModuleManager.hasModule(ClientConfig.getAppModule(this.panelarrB[i])))
            {
               this.ui = ModuleManager.getModule(ClientConfig.getAppModule(this.panelarrB[i])).content["ui"];
               this.curuiName = this.panelarrB[i];
               this.uis.push(this.ui);
               this.curNamses.push(this.curuiName);
            }
            i++;
         }
         if(this.uis.length)
         {
            LevelManager.appLevel.addEventListener(MouseEvent.CLICK,this.uiclickHandle2);
         }
      }
      
      private function uiclickHandle2(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "storageBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
         {
            if(this.nowStep == 102)
            {
               this.dealnewseerTaskB(102,6);
            }
         }
         else if(!(_loc2_ == "petStorageBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1))
         {
            if(_loc2_ == "getAbilityBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
            {
               if(this.nowStep == 107)
               {
                  this.dealnewseerTaskB(107,5);
               }
            }
            else if(_loc2_ == "searchAll" && this.curNamses.indexOf("PetStorage") != -1)
            {
               if(this.nowStep == 102)
               {
                  this.dealnewseerTaskB(102,11);
               }
            }
            else if(_loc2_ == "toBagBtn" && this.curNamses.indexOf("PetStorage") != -1)
            {
               if(this.nowStep == 102)
               {
                  this.dealnewseerTaskB(102,13);
               }
            }
            else if(_loc2_ == "center" && this.curNamses.indexOf("CountermarkForgePanel") != -1)
            {
               if(this.nowStep == 108)
               {
                  this.dealnewseerTaskB(108,4);
               }
            }
            else if(_loc2_ == "machine_0" && this.curNamses.indexOf("CountermarkForgePanel") != -1)
            {
               if(this.nowStep == 107)
               {
                  this.dealnewseerTaskB(107,7);
               }
            }
            else if(_loc2_ == "pick" && this.curNamses.indexOf("CountermarkForgePanel") != -1)
            {
               if(this.nowStep == 108)
               {
                  this.dealnewseerTaskB(108,3);
               }
            }
            else if(_loc2_ == "go_15" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
            {
               if(this.nowStep == 114)
               {
                  this.dealnewseerTaskB(114,5);
               }
            }
            else if(_loc2_ == "adBtn2" && this.curNamses.indexOf("ADPetBagPanelNew") != -1)
            {
               if(this.nowStep == 114)
               {
                  this.dealnewseerTaskB(114,4);
               }
            }
            else if(!(_loc2_ == "strengthenBtn" && this.curNamses.indexOf("PetEffectStrengthenPanel2015") != -1))
            {
               if(_loc2_ == "btn_1" && this.curNamses.indexOf("UpgradeBaseEntryPanel") != -1)
               {
                  if(this.nowStep == 116)
                  {
                     showmap1145task = true;
                  }
               }
               else if(_loc2_ == "defaultBtn" && this.curNamses.indexOf("ADPetBagPanelNew") != -1 && this.nowStep == 118 && this.nowsmallStep == 4)
               {
                  this.dealnewseerTaskB(118,5);
               }
               else if(_loc2_ == "buy_3" && this.curNamses.indexOf("NewseerTrainItemBuyPanel") != -1 && this.nowStep == 104 && this.nowsmallStep == 6)
               {
                  this.donext();
               }
            }
         }
      }
      
      public function startTaskB(param1:int, param2:int = 0) : void
      {
         if(this.nowStep == 105)
         {
            StatManager.sendStat2014("16年2月进阶","立即前往战力提升秘方","新手任务");
         }
         else if(this.nowStep == 104)
         {
            StatManager.sendStat2014("16年2月进阶","立即前往开启特性专属任务","新手任务");
         }
         this.dealingTaskB = true;
         this.nowStep = param1;
         this.nowsmallStep = param2;
         this.curbigStepObj = this._steps[this.nowStep];
         this.curbigStep = this.curbigStepObj.arr;
         this.dealnewseerTaskB(this.nowStep,this.nowsmallStep + 1);
         this.dealToolbarlock();
      }
      
      public function overTaskB(param1:Event = null) : void
      {
         var e:Event = param1;
         StatManager.sendStat2014("16年2月进阶","开始播放结束全屏","新手任务");
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("newseerTaskAOver"),function():void
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               ResourceManager.getResource(ClientConfig.getAppResource("system/newSeerVillage/newSeerEndMovie"),function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  LevelManager.stage.addChild(mc);
                  AnimateManager.playMcAnimate(mc,1,"mc",function():void
                  {
                     LevelManager.stage.removeChild(mc);
                     showMask({"parm":"131"});
                     ModuleManager.addEventListener(ModuleManager.MODEL_SHOW,onModuleLoadTaskB);
                  });
               });
            });
         });
         this.clearTaskB();
         SetupsController.newseerover();
         this.dealToolbarlock(null);
         IconController.eachIcon(function(param1:IconView):void
         {
            IconController.hideIcon(param1.url);
            IconController.showIcon(param1.url);
         });
         BitBuffSetClass.setState(23046,1,function():void
         {
            EventManager.dispatchEvent(new Event(NEWSEERTASKB_OVER));
         });
      }
      
      private function wanghamoiconclickHandle() : void
      {
         this.hidemask();
         ModuleManager.removeListener(ModuleManager.MODEL_SHOW,this.onModuleLoadTaskB);
      }
      
      private function dealToolbarlock(param1:Event = null) : void
      {
         var e:Event = param1;
         KTool.getMultiValue([8543],function(param1:Array):void
         {
            var _loc2_:int = int(NewSeerTaskController.newSeer20170627TaskPro);
            var _loc3_:Array = ["nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","nono_helper:helper:homeBtn:cultureBtn:starMapBtn:mailMc:maplock:friendBtn","maplock"];
            var _loc4_:String = _loc3_[_loc2_] as String;
            if(MainManager.actorInfo.isVip)
            {
               _loc4_ = _loc4_.replace("nono_helper:","");
            }
            if(param1[0] >= 7 || nowStep == 111)
            {
               _loc4_ = _loc4_.replace("cultureBtn:","");
            }
            dealToolbar(_loc4_);
         });
      }
      
      public function dealnewseerTaskB(param1:int, param2:int) : void
      {
         var arr:Array = null;
         var i:int = 0;
         var bigstep:int = param1;
         var step:int = param2;
         eff_up_free_this_time = false;
         culture_free_this_time = false;
         countermask_free_this_time = false;
         countermask_not_hide_menu = false;
         playvipMovie = false;
         if(this.nowStep != bigstep || this.nowStep == bigstep && step != this.nowsmallStep + 1)
         {
            return;
         }
         if(this.nowStep == 107 && step == 6)
         {
            countermask_free_this_time = true;
         }
         if(this.nowStep == 114 && step == 7)
         {
            eff_up_free_this_time = true;
         }
         if(this.nowStep == 109 && (step == 2 || step == 3))
         {
            countermask_not_hide_menu = true;
         }
         if(this.nowStep == 105 && step == 5)
         {
            ModuleManager.hideAllModule();
            playvipMovie = true;
         }
         this.hidemask();
         this.nowsmallStep = step;
         this.curobj = this.curbigStep[this.nowsmallStep - 1];
         switch(this.curobj.type)
         {
            case 1:
               this.playfullmovie(this.curobj);
               break;
            case 2:
               if(this.curobj.closeother == 1)
               {
                  LevelUpAndNewSkillController.instance.closePanel();
                  ModuleManager.hideAllModule();
               }
               ModuleManager.showAppModule(this.curobj.parm);
               if(this.curobj.donext == 1)
               {
                  this.donext();
               }
               break;
            case 3:
               this.playmapMovie(this.curobj);
               break;
            case 4:
               this.subframemmovies = String(this.curobj.parm).split(":");
               this.subStopFrames = String(this.curobj.stopframe).split("|");
               this.playFrameMovie(this.subframemmovies.shift(),true);
               break;
            case 5:
               this.overmapmovie();
               break;
            case 6:
               this.showDialogLeft(this.curobj);
               break;
            case 7:
               this.showDialogright(this.curobj);
               break;
            case 8:
               this.showMask(this.curobj);
               break;
            case 9:
               this.playFightMovie(this.curobj);
               break;
            case 10:
               this.showPetBag();
               break;
            case 11:
               arr = this.curobj.parm.split(":");
               i = 0;
               while(i < arr.length)
               {
                  arr[i] = parseInt(arr[i]);
                  i++;
               }
               SocketConnection.sendByQueue(arr.shift(),arr,function(param1:*):void
               {
                  var e:* = param1;
                  if(curobj.parm == "43691:2:2" || curobj.parm == "43691:2:1")
                  {
                     showLeiyiPow(500,function():void
                     {
                        if(curobj.parm == "43691:2:2")
                        {
                           EventManager.dispatchEvent(new DynamicEvent("newseerunlock"));
                           ModuleManager.showAppModule("NewseerTrainTaskOverShowPanel",3);
                        }
                        donext();
                     });
                  }
                  else
                  {
                     donext();
                  }
               },function(param1:*):void
               {
               });
               break;
            case 12:
               if(ModuleManager.hasModule(this.curobj.parm))
               {
                  ModuleManager.hideModule(this.curobj.parm);
               }
               break;
            case 13:
               BitBuffSetClass.setState(parseInt(this.curobj.parm),1);
               this.donext();
               break;
            case 14:
               this.startTaskB(parseInt(this.curobj.parm),1);
               break;
            case 15:
               this.buyItemHande(this.curobj);
               break;
            case 16:
               if(this.nowStep == 105 && this.nowsmallStep == 1)
               {
                  StatManager.sendStat2014("16年2月进阶","播放提升秘方UI动画","新手任务");
               }
               else if(this.nowStep == 105 && this.nowsmallStep == 4)
               {
                  StatManager.sendStat2014("2017年6月封闭","1播放首次进入训练营UI动画","新手任务");
               }
               this.playothermovie(this.curobj.parm);
         }
      }
      
      private function playothermovie(param1:String) : void
      {
         var _loc3_:int = 0;
         if(this.nowStep == 117)
         {
            StatManager.sendStat2014("2016年1月基础","播放赛小息指引动画","新手任务");
         }
         var _loc2_:Array = param1.split(":");
         if(_loc2_.length > 1)
         {
            _loc3_ = int(_loc2_[1]);
            if(BitBuffSetClass.getState(_loc3_))
            {
               this.donext();
            }
            else
            {
               this.confirmPlayothermovie(_loc2_[0],_loc3_);
            }
         }
         else
         {
            this.confirmPlayothermovie(param1);
         }
      }
      
      private function confirmPlayothermovie(param1:String, param2:int = -1) : void
      {
         var str:String = param1;
         var bid:int = param2;
         ResourceManager.getResource(ClientConfig.getAppResource(str),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.stage.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               LevelManager.stage.removeChild(mc);
               if(bid != -1)
               {
                  BitBuffSetClass.setState(bid,1);
               }
               donext();
            });
         });
      }
      
      private function buyItemHande(param1:Object) : void
      {
         var arr:Array;
         var obj:Object = param1;
         this.donext();
         arr = obj.parm.split(":");
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0122/" + arr[0]),function(param1:MovieClip):void
         {
            var mcClick:Function = null;
            var mc:MovieClip = param1;
            mcClick = function(param1:MouseEvent):void
            {
               switch(param1.target.name)
               {
                  case "buy":
                     mc["panel"].visible = true;
                     dealnewseerTaskB(nowStep,nowsmallStep + 1);
                     break;
                  case "ok":
                     mc.removeEventListener(MouseEvent.CLICK,mcClick);
                     LevelManager.appLevel.removeChild(mc);
                     dealnewseerTaskB(nowStep,nowsmallStep + 1);
               }
            };
            LevelManager.appLevel.addChild(mc);
            mc.addEventListener(MouseEvent.CLICK,mcClick);
            mc["panel"].visible = false;
         });
      }
   }
}
