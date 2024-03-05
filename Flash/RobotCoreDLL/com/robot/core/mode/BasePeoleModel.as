package com.robot.core.mode
{
   import com.robot.core.CommandID;
   import com.robot.core.aticon.AimatAction;
   import com.robot.core.aticon.PeculiarAction;
   import com.robot.core.behavior.IBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.event.PeopleActionEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.group.GroupLogo;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.MountManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.ShotBehaviorManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.additiveInfo.ISpriteAdditiveInfo;
   import com.robot.core.mode.additiveInfo.TeamPkPlayerSideInfo;
   import com.robot.core.mode.spriteInteractive.ClothLightInteractive;
   import com.robot.core.mode.spriteInteractive.ISpriteInteractiveAction;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import com.robot.core.skeleton.ISkeleton;
   import com.robot.core.skeleton.TransformSkeleton;
   import com.robot.core.skeleton.special.SpecialSkeletonController;
   import com.robot.core.teamInstallation.TeamLogo;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.Direction;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.text.TextFormatAlign;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BasePeoleModel extends ActionSpriteModel implements ISkeletonSprite
   {
      
      public static var SPECIAL_ACTION:String = "action";
      
      public static const titlIconX:int = -42;
      
      public static const defaultY:int = 14;
      
      public static const defaultTopIconY:int = -70;
      
      public static var needShowJobTitle:Boolean = false;
      
      private static var _tancainiuTaskMC:MovieClip;
       
      
      public var isShield:Boolean = false;
      
      protected var shieldMC:MovieClip;
      
      protected var shieldTimer:Timer;
      
      protected var _info:UserInfo;
      
      protected var _tf:TextFormat;
      
      protected var _nameTxt:TextField;
      
      protected var _annualFeeSprite:Sprite;
      
      protected var _nameContainer:DisplayObjectContainer;
      
      protected var _isProtected:Boolean = false;
      
      protected var _protectMC:MovieClip;
      
      protected var clickBtn:Sprite;
      
      protected var _skeletonSys:ISkeleton;
      
      protected var _oldSkeleton:ISkeleton;
      
      protected var _interactiveAction:ISpriteInteractiveAction;
      
      protected var _teamLogo:TeamLogo;
      
      protected var _jobTitle:MovieClip;
      
      protected var _clockAlarm:MovieClip;
      
      protected var _groupLogo:GroupLogo;
      
      protected var _groupFootMC:MovieClip;
      
      protected var _sevenAnniversaryTogetherIcon:MovieClip;
      
      protected var _yearVipforverId:int = 125078;
      
      public var walkEnabled:Boolean = true;
      
      private var _mount:com.robot.core.mode.PetModel;
      
      private var _nono:com.robot.core.mode.INonoModel;
      
      private var _pet:com.robot.core.mode.PetModel;
      
      private var _additiveInfo:ISpriteAdditiveInfo;
      
      private var _clothLight:MovieClip;
      
      protected var _topIconContainer:Sprite;
      
      protected var swimmingmask:MovieClip;
      
      protected var swimmingmc:MovieClip;
      
      protected var dragonEgg:com.robot.core.mode.EggModel;
      
      private var _hongbaoIcon:DisplayObject;
      
      private var isswimming:Boolean;
      
      private var _strengthIcon:DisplayObject;
      
      private var strengthNum:int;
      
      private var _moyayataskIcon:DisplayObject;
      
      private var moyayatask:int;
      
      private var moyayatasktotal:int;
      
      private var _darkMc:MovieClip;
      
      private var _tigerFightHead:MovieClip;
      
      private var _foolsdayMask:MovieClip;
      
      private var _peakJihadHeadIcon:MovieClip;
      
      private var _campHeadIcon:MovieClip;
      
      private var _qingmingIcon:MovieClip;
      
      private var studentIcon:MovieClip = null;
      
      private var isShowStudentIcon:Boolean = false;
      
      private var _expIcon:MovieClip;
      
      private var _effect:MovieClip;
      
      private var fireMC:MovieClip;
      
      private var addSpeed:Number = 0;
      
      private var _transformController:SpecialSkeletonController;
      
      private var _icon:Sprite;
      
      private var iconId:int;
      
      private var _url:String;
      
      private var isWrap:Boolean;
      
      private var titleCon:Sprite;
      
      private var titleTxt:TextField;
      
      private var _selfTf:TextFormat;
      
      private var _bodyWidth:Number;
      
      public function BasePeoleModel(param1:UserInfo)
      {
         var _loc3_:PetShowInfo = null;
         super();
         mouseEnabled = false;
         var _loc2_:MovieClip = UIManager.getMovieClip("show_mc");
         _loc2_.name = "show_mc";
         _loc2_.cacheAsBitmap = true;
         addChild(_loc2_);
         this._info = param1;
         name = "BasePeoleModel_" + this._info.userID.toString();
         this._tf = new TextFormat();
         this._tf.font = "宋体";
         this._tf.letterSpacing = 0.5;
         this._tf.size = 12;
         this._tf.align = TextFormatAlign.CENTER;
         this._nameTxt = new TextField();
         this._nameTxt.mouseEnabled = false;
         this._nameTxt.autoSize = TextFieldAutoSize.CENTER;
         this._nameTxt.width = 100;
         this._nameTxt.height = 30;
         this._nameTxt.x = this._nameTxt.width / 2 - 4;
         this._nameTxt.text = this._info.nick;
         this._nameTxt.setTextFormat(this._tf);
         this._nameTxt.cacheAsBitmap = true;
         this._nameContainer = new Sprite();
         this._nameContainer.name = "nameContainer";
         this._nameContainer.y = defaultY;
         this._nameContainer.cacheAsBitmap = true;
         this._nameContainer.mouseChildren = this._nameContainer.mouseEnabled = false;
         addChild(this._nameContainer);
         this.initAnnualFeeName();
         this._topIconContainer = new Sprite();
         this._topIconContainer.y = defaultTopIconY;
         this._topIconContainer.cacheAsBitmap = true;
         addChild(this._topIconContainer);
         this.skeleton = param1.changeShape != 0 ? new TransformSkeleton() : new EmptySkeletonStrategy();
         pos = this._info.pos;
         this.direction = Direction.indexToStr(this._info.direction);
         if(this._info.action > 10000)
         {
            this.peculiarAction(direction,false);
         }
         this.clickBtn = new Sprite();
         this.clickBtn.graphics.beginFill(0,0);
         this.clickBtn.graphics.drawRect(0,0,40,50);
         this.clickBtn.graphics.endFill();
         this.clickBtn.buttonMode = true;
         this.clickBtn.x = -20;
         this.clickBtn.y = -50;
         this.clickBtn.cacheAsBitmap = true;
         addChild(this.clickBtn);
         this._additiveInfo = new TeamPkPlayerSideInfo(this);
         this.interactiveAction = new ClothLightInteractive(this);
         this.addEvent();
         if(this._info.curTitle > 0)
         {
            this.getMedal();
         }
         this.showGroupLogo();
         this.showDarkLight();
         this.showTopFightEffect();
         this.updateFireBuff();
         this.updateCampHeadIcon();
         if(this._info.transId == 0)
         {
            this.reduction();
         }
         else
         {
            this.changeBody(this._info.transId,0);
         }
         this.addHongbaoIcon();
         if(this._info.spiritID != 0)
         {
            _loc3_ = new PetShowInfo();
            _loc3_.userID = this._info.userID;
            _loc3_.catchTime = this._info.spiritTime;
            _loc3_.petID = this._info.spiritID;
            _loc3_.isBright = this._info.isBright;
            _loc3_.isEatBrigh = this._info.specialBright;
            _loc3_.otherPetId = this._info.otherPetID;
            _loc3_.otherBright = this._info.otherBright;
            _loc3_.otherEatBright = this._info.otherEatBright;
            this.showPet(_loc3_);
         }
         if(this._info.mountId != 0)
         {
            this.showMount(this._info.mountId);
         }
      }
      
      public function setClickSpriteToTop() : void
      {
         this.setChildIndex(this.clickBtn,this.numChildren - 1);
      }
      
      public function addHongbaoIcon() : void
      {
         var ktool_cls:* = undefined;
         if(this._info.userID != MainManager.actorID && this._hongbaoIcon == null && SystemTimerManager.sysDate < new Date("2017/6/9"))
         {
            ktool_cls = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
            ktool_cls.getMultiValue([18277],function(param1:Array):void
            {
               var arr:Array = param1;
               var radom:int = int(Math.random() * 100);
               if(radom <= 30 && arr[0] < 100)
               {
                  ResourceManager.getResource(ClientConfig.getResPath("forApp/icon/ZongziIcon.swf"),function(param1:DisplayObject):void
                  {
                     if(param1)
                     {
                        _hongbaoIcon = param1;
                        _hongbaoIcon.addEventListener(MouseEvent.CLICK,onHongBaoClick);
                        _topIconContainer.addChild(_hongbaoIcon);
                     }
                  },"item");
               }
            });
         }
      }
      
      private function onHongBaoClick(param1:MouseEvent) : void
      {
         var ktool_cls:*;
         var e:MouseEvent = param1;
         StatManager.sendStat2014("0526青竹龙曜","点击头顶icon","2017运营活动");
         ktool_cls = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         ktool_cls.getMultiValue([18277],function(param1:Array):void
         {
            if(param1[0] >= 100)
            {
               Alarm.show("你今日获得了太多的原材料了！");
               destroyHongbaoIcon();
            }
            else
            {
               SocketConnection.sendByQueue(42342,[18,0],destroyHongbaoIcon);
               if(param1[0] == 0)
               {
                  ModuleManager.showAppModule("GreenBambooLongYaoSub3Panel");
               }
            }
         });
      }
      
      public function destroyHongbaoIcon(param1:* = null) : void
      {
         if(this._hongbaoIcon)
         {
            DisplayUtil.removeForParent(this._hongbaoIcon);
            this._hongbaoIcon.removeEventListener(MouseEvent.CLICK,this.onHongBaoClick);
            this._hongbaoIcon = null;
         }
      }
      
      public function showSwimming(param1:* = null) : void
      {
         this.isswimming = true;
      }
      
      public function destroySwimmingmc(param1:* = null) : void
      {
         this.isswimming = false;
      }
      
      public function addstrengthIcon() : void
      {
         if(this._strengthIcon == null)
         {
            ResourceManager.getResource(ClientConfig.getResPath("forApp/icon/strengthIcon.swf"),function(param1:DisplayObject):void
            {
               if(param1)
               {
                  _strengthIcon = param1;
                  _topIconContainer.addChild(_strengthIcon);
                  CommonUI.centerAlign(_strengthIcon,_topIconContainer,new Point(0,0));
                  updatestrengthIcon(strengthNum);
               }
            },"item");
         }
      }
      
      public function updatestrengthIcon(param1:int) : void
      {
         this.strengthNum = param1;
         if(this._strengthIcon)
         {
            this._strengthIcon["num"].text = this.strengthNum + "/10";
            this._strengthIcon["pro"].gotoAndStop(this.strengthNum + 1);
         }
      }
      
      public function destroystrengthIcon(param1:* = null) : void
      {
         if(this._strengthIcon)
         {
            DisplayUtil.removeForParent(this._strengthIcon);
            this._strengthIcon = null;
         }
      }
      
      public function addmoyayataskIcon() : void
      {
         if(this._moyayataskIcon == null)
         {
            ResourceManager.getResource(ClientConfig.getResPath("forApp/icon/moyayataskIcon.swf"),function(param1:DisplayObject):void
            {
               if(param1)
               {
                  _moyayataskIcon = param1;
                  _topIconContainer.addChild(_moyayataskIcon);
                  CommonUI.centerAlign(_moyayataskIcon,_topIconContainer,new Point(0,0));
                  updatemoyayataskIcon(moyayatask,moyayatasktotal);
               }
            },"item");
         }
      }
      
      public function updatemoyayataskIcon(param1:int, param2:int) : void
      {
         this.moyayatask = param1;
         this.moyayatasktotal = param2;
         if(this._moyayataskIcon)
         {
            (this._moyayataskIcon as MovieClip).gotoAndStop(int((this._moyayataskIcon as MovieClip).totalFrames * Number((this.moyayatasktotal - this.moyayatask) / this.moyayatasktotal)) + 1);
         }
      }
      
      public function destroymoyayataskIcon(param1:* = null) : void
      {
         if(this._moyayataskIcon)
         {
            DisplayUtil.removeForParent(this._moyayataskIcon);
            this._moyayataskIcon = null;
         }
      }
      
      public function showQiya() : void
      {
         var _loc1_:PetShowInfo = new PetShowInfo();
         _loc1_.userID = this._info.userID;
         _loc1_.catchTime = this._info.spiritTime;
         _loc1_.petID = 2931;
         _loc1_.isBright = this._info.isBright;
         _loc1_.isEatBrigh = this._info.specialBright;
         _loc1_.otherPetId = this._info.otherPetID;
         _loc1_.otherBright = this._info.otherBright;
         _loc1_.otherEatBright = this._info.otherEatBright;
         this.showPet(_loc1_);
      }
      
      public function removeQiya() : void
      {
         var _loc1_:PetShowInfo = null;
         this.destroyPet();
         if(this._info.spiritID != 0)
         {
            _loc1_ = new PetShowInfo();
            _loc1_.userID = this._info.userID;
            _loc1_.catchTime = this._info.spiritTime;
            _loc1_.petID = this._info.spiritID;
            _loc1_.isBright = this._info.isBright;
            _loc1_.isEatBrigh = this._info.specialBright;
            _loc1_.otherPetId = this._info.otherPetID;
            _loc1_.otherBright = this._info.otherBright;
            _loc1_.otherEatBright = this._info.otherEatBright;
            this.showPet(_loc1_);
         }
      }
      
      public function showDarkLight() : void
      {
         this.destroyDarkLight();
         if(this._info.darkLight == 0)
         {
            return;
         }
         if(this._info.darkLight == 1)
         {
            this._darkMc = UIManager.getMovieClip("DarkLight_100_Mc");
            this._darkMc.scaleX = this._darkMc.y = 0.7;
         }
         else
         {
            this._darkMc = UIManager.getMovieClip("DarkLight_100_Mc");
         }
         this._darkMc.mouseChildren = false;
         this._darkMc.mouseEnabled = false;
         this._darkMc.cacheAsBitmap = true;
         this._darkMc.play();
         addChildAt(this._darkMc,0);
      }
      
      public function destroyDarkLight() : void
      {
         if(this._darkMc)
         {
            DisplayUtil.removeForParent(this._darkMc);
            this._darkMc = null;
         }
      }
      
      public function updateTigerFightHead() : void
      {
      }
      
      private function onTigerHead(param1:MouseEvent) : void
      {
         if(this.info.userID == MainManager.actorID)
         {
            return;
         }
         getDefinitionByName("com.robot.app2.mapProcess.control.TigerFightController").clickHead(this._info,this._tigerFightHead);
         this.destroyTigerFightHead();
      }
      
      public function destroyTigerFightHead() : void
      {
      }
      
      public function showfoolsdayMask() : MovieClip
      {
         return null;
      }
      
      public function hidefoolsdayMask() : void
      {
      }
      
      private function onfoolsdayMaskClick(param1:Event) : void
      {
      }
      
      public function destroyfoolsdayMask() : void
      {
      }
      
      public function showPeakJihadHeadIcon() : MovieClip
      {
         this.destroyPeakJihadHeadIcon();
         this._peakJihadHeadIcon = UIManager.getMovieClip("peakJihadheadIcon");
         this._peakJihadHeadIcon.buttonMode = true;
         this._peakJihadHeadIcon.x -= 0;
         this._peakJihadHeadIcon.y -= 65;
         this._peakJihadHeadIcon.addEventListener(MouseEvent.CLICK,this.onPeakJihadHeadIconClick);
         addChild(this._peakJihadHeadIcon);
         return this._peakJihadHeadIcon;
      }
      
      public function hidePeakJihadHeadIcon() : void
      {
         this._peakJihadHeadIcon.removeEventListener(MouseEvent.CLICK,this.onPeakJihadHeadIconClick);
         DisplayUtil.removeForParent(this._peakJihadHeadIcon);
         this._peakJihadHeadIcon = null;
      }
      
      private function onPeakJihadHeadIconClick(param1:Event) : void
      {
         if(MapManager.currentMap.id != 1095 && MapManager.styleID != 700003)
         {
            MapManager.changeMap(1095);
         }
      }
      
      public function destroyPeakJihadHeadIcon() : void
      {
         if(this._peakJihadHeadIcon)
         {
            DisplayUtil.removeForParent(this._peakJihadHeadIcon);
            this._peakJihadHeadIcon.removeEventListener(MouseEvent.CLICK,this.onPeakJihadHeadIconClick);
            this._peakJihadHeadIcon = null;
         }
      }
      
      public function showCampHeadIcon(param1:int) : MovieClip
      {
         this.destroyCampHeadIcon();
         this._campHeadIcon = UIManager.getMovieClip("campHeadIcon");
         this._campHeadIcon.buttonMode = true;
         this._campHeadIcon.x -= 0;
         this._campHeadIcon.y -= 85;
         this._campHeadIcon.gotoAndStop(param1);
         this._campHeadIcon.addEventListener(MouseEvent.CLICK,this.onCampHeadIconClick);
         addChild(this._campHeadIcon);
         return this._campHeadIcon;
      }
      
      public function hideCampHeadIcon() : void
      {
         if(this._campHeadIcon != null)
         {
            this._campHeadIcon.removeEventListener(MouseEvent.CLICK,this.onCampHeadIconClick);
            DisplayUtil.removeForParent(this._campHeadIcon);
         }
         this._campHeadIcon = null;
      }
      
      private function onCampHeadIconClick(param1:Event) : void
      {
         var KTool:* = undefined;
         var FightManager:* = undefined;
         var TheChaosOfTheHolySpiritController:* = undefined;
         var e:Event = param1;
         if(this._info.userID == MainManager.actorInfo.userID)
         {
            return;
         }
         KTool = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         FightManager = getDefinitionByName("com.robot.app.fight.FightManager");
         TheChaosOfTheHolySpiritController = getDefinitionByName("com.robot.app2.control.TheChaosOfTheHolySpiritController");
         KTool.getMultiValue([101308],function(param1:Array):void
         {
            var va:Array = param1;
            KTool.getOnlineUsersForeverOrDailyVal([info.userID,101308],function(param1:int):void
            {
               TheChaosOfTheHolySpiritController.set0ldNum();
               if(va[0] == param1)
               {
                  FightManager.fightWithPlayer(_info);
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritFihgtAlarmPanel"),"正在打开....",_info);
               }
            });
         });
      }
      
      public function destroyCampHeadIcon() : void
      {
         if(this._campHeadIcon)
         {
            DisplayUtil.removeForParent(this._campHeadIcon);
            this._campHeadIcon.removeEventListener(MouseEvent.CLICK,this.onCampHeadIconClick);
            this._campHeadIcon = null;
         }
      }
      
      public function showQingmingIcon() : MovieClip
      {
         this.destroyQingmingIcon();
         this._qingmingIcon = UIManager.getMovieClip("qingmingIcon");
         this._qingmingIcon.buttonMode = true;
         this._qingmingIcon.x -= 0;
         this._qingmingIcon.y -= 85;
         this._qingmingIcon.addEventListener(MouseEvent.CLICK,this.onQingmingIconClick);
         addChild(this._qingmingIcon);
         return this._qingmingIcon;
      }
      
      public function hideQingmingIcon() : void
      {
         if(this._qingmingIcon != null)
         {
            this._qingmingIcon.removeEventListener(MouseEvent.CLICK,this.onQingmingIconClick);
            DisplayUtil.removeForParent(this._qingmingIcon);
         }
         this._qingmingIcon = null;
      }
      
      private function onQingmingIconClick(param1:Event) : void
      {
         var KTool:*;
         var e:Event = param1;
         if(this._info.userID == MainManager.actorInfo.userID)
         {
            return;
         }
         KTool = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         KTool.getMultiValue([18519],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] < 50)
            {
               SocketConnection.sendByQueue(42365,[11,0],function():void
               {
                  hideQingmingIcon();
               });
            }
         });
      }
      
      public function destroyQingmingIcon() : void
      {
         if(this._qingmingIcon)
         {
            DisplayUtil.removeForParent(this._qingmingIcon);
            this._qingmingIcon.removeEventListener(MouseEvent.CLICK,this.onQingmingIconClick);
            this._qingmingIcon = null;
         }
      }
      
      private function showStudentIcon() : void
      {
         if(MainManager.actorID == this._info.userID || this._info.userID == 0)
         {
            return;
         }
         if(this.isShowStudentIcon)
         {
            return;
         }
         if(this.studentIcon)
         {
            return;
         }
         this.isShowStudentIcon = true;
         ResourceManager.getResource(ClientConfig.getAppResource("2022/0902/studentIcon"),function(param1:MovieClip):void
         {
            studentIcon = param1;
            studentIcon.addEventListener(MouseEvent.CLICK,onStudentIconClick);
            studentIcon.x -= 0;
            studentIcon.y -= 85;
            addChild(studentIcon);
         });
      }
      
      private function onStudentIconClick(param1:*) : void
      {
         this.destroyStudentIcon();
         ModuleManager.showModule(ClientConfig.getAppModule("FindLostStudentAnswerPanel"),"正在打开...",null,1);
      }
      
      private function destroyStudentIcon() : void
      {
         if(this.studentIcon)
         {
            this.isShowStudentIcon = false;
            this.studentIcon.removeEventListener(MouseEvent.CLICK,this.onStudentIconClick);
            DisplayUtil.removeForParent(this.studentIcon);
            this.studentIcon = null;
         }
      }
      
      public function showExpAlarm() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("forApp/icon/expNoticeIcon.swf"),function(param1:DisplayObject):void
         {
            if(param1)
            {
               _expIcon = param1 as MovieClip;
               _expIcon.gotoAndPlay(1);
               _expIcon.mouseChildren = false;
               _expIcon.buttonMode = true;
               _expIcon.addEventListener(MouseEvent.CLICK,onExpAlarm);
               _topIconContainer.addChild(_expIcon);
            }
         },"item");
      }
      
      private function onExpAlarm(param1:MouseEvent) : void
      {
         if(this._info.userID != MainManager.actorID)
         {
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("ChangeBodyForExpCheckTimePanel"));
      }
      
      public function hideExpAlarm() : void
      {
         if(this._expIcon)
         {
            DisplayUtil.removeForParent(this._expIcon);
            this._expIcon.removeEventListener(MouseEvent.CLICK,this.onExpAlarm);
            this._expIcon = null;
         }
      }
      
      public function showTopFightEffect() : void
      {
         if(this._info.topFightEffect == 1)
         {
            if(this._effect == null)
            {
               this._effect = UIManager.getMovieClip("ui_topFight_effect");
               this._effect.cacheAsBitmap = true;
            }
            this._effect.gotoAndPlay(1);
            addChild(this._effect);
         }
      }
      
      public function showTopTancainiu() : void
      {
         var ktool_cls:*;
         var curMap:MapModel;
         var curMapId:uint = 0;
         if(MainManager.actorID != this._info.userID)
         {
            return;
         }
         ktool_cls = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         curMap = MapManager.currentMap;
         if(curMap == null)
         {
            return;
         }
         curMapId = curMap.id;
         ktool_cls.getMultiValue([5551,5553,5550,5559],function(param1:Array):void
         {
            var arr:Array = param1;
            var val0:uint = uint(arr[0]);
            var val1:uint = uint(arr[1]);
            var val2:uint = uint(arr[2]);
            var val3:uint = uint(arr[3]);
            if(curMapId == 1034 && val3 == 1)
            {
               if(_tancainiuTaskMC != null)
               {
                  removeChild(_tancainiuTaskMC);
                  _tancainiuTaskMC = null;
                  _tancainiuTaskMC = UIManager.getMovieClip("ui_tancainiutask_head");
                  addChild(_tancainiuTaskMC);
               }
               else
               {
                  _tancainiuTaskMC = UIManager.getMovieClip("ui_tancainiutask_head");
                  addChild(_tancainiuTaskMC);
               }
               _tancainiuTaskMC.buttonMode = true;
               _tancainiuTaskMC.gotoAndStop(1);
               _tancainiuTaskMC.numTxt.text = val0 + "/3";
               _tancainiuTaskMC.x = 10;
               _tancainiuTaskMC.y = -73;
               if(val0 != 3)
               {
                  _tancainiuTaskMC.overBtn.visible = false;
               }
               else
               {
                  _tancainiuTaskMC.overBtn.visible = true;
                  _tancainiuTaskMC.overBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     _tancainiuTaskMC.visible = false;
                     removeChild(_tancainiuTaskMC);
                     _tancainiuTaskMC = null;
                     ModuleManager.showModule(ClientConfig.getAppModule("QingDragonFensiTeamPanel"),"正在打开...",null,1);
                  });
               }
            }
            else if(curMapId == 993 && val3 == 3)
            {
               if(_tancainiuTaskMC != null)
               {
                  removeChild(_tancainiuTaskMC);
                  _tancainiuTaskMC = null;
                  _tancainiuTaskMC = UIManager.getMovieClip("ui_tancainiutask_head");
                  addChild(_tancainiuTaskMC);
               }
               else
               {
                  _tancainiuTaskMC = UIManager.getMovieClip("ui_tancainiutask_head");
                  addChild(_tancainiuTaskMC);
               }
               _tancainiuTaskMC.buttonMode = true;
               _tancainiuTaskMC.gotoAndStop(2);
               _tancainiuTaskMC.numTxt.text = val1 + "/3";
               _tancainiuTaskMC.x = 10;
               _tancainiuTaskMC.y = -73;
               if(val1 != 3)
               {
                  _tancainiuTaskMC.overBtn.visible = false;
               }
               else
               {
                  _tancainiuTaskMC.overBtn.visible = true;
                  _tancainiuTaskMC.overBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     _tancainiuTaskMC.visible = false;
                     removeChild(_tancainiuTaskMC);
                     _tancainiuTaskMC = null;
                     ModuleManager.showModule(ClientConfig.getAppModule("QingDragonFensiTeamPanel"),"正在打开...",null,1);
                  });
               }
            }
            else if(_tancainiuTaskMC)
            {
               removeChild(_tancainiuTaskMC);
               _tancainiuTaskMC = null;
            }
         });
      }
      
      public function getFireBuffIndex() : uint
      {
         return sprite.getChildIndex(this.fireMC);
      }
      
      public function updateFireBuff() : void
      {
         if(this.fireMC)
         {
            DisplayUtil.removeForParent(this.fireMC);
            this.fireMC = null;
         }
         this.fireMC = UIManager.getMovieClip("FireBuffClip");
         this.fireMC.cacheAsBitmap = true;
         if(this._info.userID == MainManager.actorID)
         {
            sprite.addChildAt(this.fireMC,2);
         }
         else
         {
            sprite.addChildAt(this.fireMC,1);
         }
         if(this.info.fireBuff > 0)
         {
            if(this.addSpeed == 0 && this.info.fireBuff == 1)
            {
               this.addSpeed = this.speed * 0.2;
               this.speed += this.addSpeed;
            }
            else if(this.addSpeed > 0 && this.info.fireBuff != 1)
            {
               this.speed -= this.addSpeed;
               this.addSpeed = 0;
            }
            this.fireMC.gotoAndStop(this.info.fireBuff);
         }
         else
         {
            if(this.addSpeed > 0)
            {
               this.speed -= this.addSpeed;
               this.addSpeed = 0;
            }
            this.fireMC.gotoAndStop(10);
         }
      }
      
      public function updateCampHeadIcon() : void
      {
         var KTool:*;
         if(MapManager.currentMap == null)
         {
            return;
         }
         if(MapManager.currentMap.id != 1250)
         {
            return;
         }
         if(this._campHeadIcon)
         {
            DisplayUtil.removeForParent(this._campHeadIcon);
            this._campHeadIcon = null;
         }
         KTool = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         if(this.info.userID == MainManager.actorInfo.userID)
         {
            KTool.getMultiValue([101308],function(param1:Array):void
            {
               if(param1[0] > 0)
               {
                  showCampHeadIcon(param1[0]);
               }
            });
         }
         else
         {
            KTool.getOnlineUsersForeverOrDailyVal([this.info.userID,101308],function(param1:int):void
            {
               if(param1 > 0)
               {
                  showCampHeadIcon(param1);
               }
            });
         }
      }
      
      public function updateQingmingIcon() : void
      {
         var KTool:*;
         if(MapManager.currentMap == null)
         {
            return;
         }
         if(this._qingmingIcon)
         {
            DisplayUtil.removeForParent(this._qingmingIcon);
            this._qingmingIcon = null;
         }
         KTool = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         KTool.getMultiValue([18519],function(param1:Array):void
         {
            if(param1[0] < 50)
            {
               showQingmingIcon();
            }
         });
      }
      
      public function get clickMc() : Sprite
      {
         return this.clickBtn;
      }
      
      public function showClothLight() : void
      {
         DisplayUtil.removeForParent(this._clothLight);
         this._clothLight = null;
         if(this.info.clothMaxLevel > 1)
         {
            ResourceManager.getResource(ClientConfig.getClothLightUrl(this.info.clothMaxLevel),function(param1:DisplayObject):void
            {
               _clothLight = param1 as MovieClip;
               _clothLight.cacheAsBitmap = true;
               addChild(_clothLight);
            });
         }
         if(PetManager.showInfo != null)
         {
            if(PetManager.showInfo.id == 1226 || PetManager.showInfo.id == 1227)
            {
               if(this.isClothTianshen())
               {
                  ResourceManager.getResource(ClientConfig.getClothSpecialUrl(1),function(param1:DisplayObject):void
                  {
                     _clothLight = param1 as MovieClip;
                     _clothLight.cacheAsBitmap = true;
                     addChild(_clothLight);
                  });
               }
            }
         }
         if(this.isClothMachine())
         {
            ResourceManager.getResource(ClientConfig.getClothSpecialUrl(2),function(param1:DisplayObject):void
            {
               _clothLight = param1 as MovieClip;
               _clothLight.cacheAsBitmap = true;
               addChild(_clothLight);
               _clothLight.play();
               _clothLight.parent.setChildIndex(_clothLight,0);
            });
         }
         if(this.isClothLightning())
         {
            ResourceManager.getResource(ClientConfig.getClothSpecialUrl(3),function(param1:DisplayObject):void
            {
               _clothLight = param1 as MovieClip;
               _clothLight.cacheAsBitmap = true;
               addChild(_clothLight);
               _clothLight.play();
            });
         }
      }
      
      public function changeBody(param1:uint, param2:uint = 0, param3:Boolean = false) : void
      {
         if(this.info.mountId != 0)
         {
            return;
         }
         if(this.info.actionType != 0)
         {
            return;
         }
         if(PetXMLInfo.isFlyPet(this.info.spiritID))
         {
            return;
         }
         if(PetXMLInfo.isRidePet(this.info.spiritID) && PetXMLInfo.isRidePetOpen(this.info.spiritID,this._info))
         {
            return;
         }
         if(this._transformController)
         {
            if(this._transformController.isNet)
            {
               return;
            }
            this._transformController.destory();
            this._transformController = null;
         }
         this._transformController = new SpecialSkeletonController(param1,param2,param3,this);
         this._transformController.transform();
      }
      
      public function reduction(param1:Boolean = false) : void
      {
         if(this._transformController)
         {
            if(this._transformController.isNet)
            {
               if(param1)
               {
                  this._transformController.destory();
                  this._transformController = null;
               }
            }
            else
            {
               this._transformController.destory();
               this._transformController = null;
            }
         }
      }
      
      public function aimatAction(param1:uint, param2:uint, param3:Point, param4:Boolean = true) : void
      {
         var _loc5_:AimatAction = null;
         if(param4)
         {
            SocketConnection.send(CommandID.AIMAT,param1,param2,param3.x,param3.y);
         }
         else
         {
            this.stop();
            (_loc5_ = new AimatAction()).execute(param1,param2,param3,this._info.userID,this);
         }
      }
      
      override public function aimatState(param1:AimatInfo) : void
      {
         if(allowAimatState == false)
         {
            return;
         }
         if(this._isProtected)
         {
            this._protectMC.gotoAndPlay(2);
            return;
         }
         super.aimatState(param1);
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 20;
         return _centerPoint;
      }
      
      public function set interactiveAction(param1:ISpriteInteractiveAction) : void
      {
         if(this._interactiveAction)
         {
            this._interactiveAction.destroy();
         }
         if(param1 == null)
         {
            this._interactiveAction = new ClothLightInteractive(this);
         }
         else
         {
            this._interactiveAction = param1;
         }
      }
      
      public function setNick(param1:String) : void
      {
         this._info.nick = param1;
         this._nameTxt.text = param1;
         this._nameTxt.setTextFormat(this._tf);
         this.annualChangeName(param1);
      }
      
      public function delProtectMC() : void
      {
         DisplayUtil.removeForParent(this._protectMC,false);
         this._isProtected = false;
      }
      
      override public function destroy() : void
      {
         this.destroyStudentIcon();
         this.reduction();
         this.destroyPet();
         this.destroyNono();
         this.destroyHongbaoIcon();
         if(this.skeleton)
         {
            if(this.skeleton.getBodyMC())
            {
               this.skeleton.getBodyMC().removeEventListener(MouseEvent.CLICK,this.onClick);
            }
            this.skeleton.destroy();
         }
         this.removeEvent();
         super.destroy();
         this._info = null;
         this._skeletonSys = null;
         DisplayUtil.removeForParent(this._clothLight);
         this._clothLight = null;
         DisplayUtil.removeForParent(this._protectMC);
         this._protectMC = null;
         if(this._teamLogo)
         {
            DisplayUtil.removeForParent(this._teamLogo);
            this._teamLogo = null;
         }
         if(this._jobTitle)
         {
            DisplayUtil.removeForParent(this._jobTitle);
            this._jobTitle = null;
         }
         if(this._clockAlarm)
         {
            DisplayUtil.removeForParent(this._clockAlarm);
            this._clockAlarm.removeEventListener(MouseEvent.CLICK,this.onClockAlarm);
            this._clockAlarm = null;
         }
         if(this._groupLogo)
         {
            this._groupLogo.destroy();
            this._groupLogo = null;
         }
         if(this._interactiveAction)
         {
            this._interactiveAction.destroy();
            this._interactiveAction = null;
         }
         if(this._darkMc)
         {
            DisplayUtil.removeForParent(this._darkMc);
            this._darkMc = null;
         }
         if(this.fireMC)
         {
            DisplayUtil.removeForParent(this.fireMC);
            this.fireMC = null;
         }
         if(this._clothLight)
         {
            DisplayUtil.removeForParent(this._clothLight);
            this._clothLight = null;
         }
         this.destroyPeakJihadHeadIcon();
         DisplayUtil.removeForParent(this);
         this.clearTopContainer();
      }
      
      public function hideClockAlarm() : void
      {
         if(this._clockAlarm)
         {
            DisplayUtil.removeForParent(this._clockAlarm);
            this._clockAlarm.removeEventListener(MouseEvent.CLICK,this.onClockAlarm);
            this._clockAlarm = null;
         }
      }
      
      override public function set direction(param1:String) : void
      {
         if(this._skeletonSys == null || param1 == null || param1 == "")
         {
            return;
         }
         _direction = param1;
         this._skeletonSys.changeDirection(param1);
         dispatchEvent(new DynamicEvent(RobotEvent.CHANGE_DIRECTION,param1));
      }
      
      public function get skeleton() : ISkeleton
      {
         return this._skeletonSys;
      }
      
      override public function get height() : Number
      {
         return this._skeletonSys.getBodyMC().height;
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x + this.clickBtn.x;
         _hitRect.y = y + this.clickBtn.y;
         _hitRect.width = 35;
         _hitRect.height = 40;
         return _hitRect;
      }
      
      public function get nameTxt() : TextField
      {
         return this._nameTxt;
      }
      
      public function get info() : UserInfo
      {
         return this._info;
      }
      
      public function get additiveInfo() : ISpriteAdditiveInfo
      {
         return this._additiveInfo;
      }
      
      public function get isTransform() : Boolean
      {
         return this._skeletonSys is TransformSkeleton;
      }
      
      public function get isProtected() : Boolean
      {
         return this._isProtected;
      }
      
      public function get nono() : com.robot.core.mode.INonoModel
      {
         return this._nono;
      }
      
      public function peculiarAction(param1:String = "", param2:Boolean = true) : void
      {
         new PeculiarAction().execute(this,param1,param2);
      }
      
      public function get pet() : com.robot.core.mode.PetModel
      {
         return this._pet;
      }
      
      public function set skeleton(param1:ISkeleton) : void
      {
         if(this._skeletonSys)
         {
            this._oldSkeleton = this._skeletonSys;
         }
         this._skeletonSys = param1;
         this._skeletonSys.people = this;
         this._skeletonSys.info = this._info;
      }
      
      public function clearOldSkeleton() : void
      {
         if(this._oldSkeleton)
         {
            this._oldSkeleton.destroy();
            this._oldSkeleton = null;
         }
      }
      
      public function switchTitle(param1:Boolean) : void
      {
         if(param1)
         {
            this.getMedal();
         }
         else
         {
            DisplayUtil.removeForParent(this._icon);
            DisplayUtil.removeForParent(this.titleCon);
            this.titleCon = null;
            this._icon = null;
            this._nameContainer.y = defaultY;
         }
      }
      
      public function refreshTitle(param1:uint) : void
      {
         DisplayUtil.removeForParent(this._icon);
         DisplayUtil.removeForParent(this.titleCon);
         this._icon = null;
         this.titleCon = null;
         this._info.curTitle = param1;
         if(this._info.curTitle > 0)
         {
            this.getMedal();
         }
         else
         {
            this._nameContainer.y = defaultY;
         }
      }
      
      private function getOldMedal() : void
      {
         var _url:String;
         var _p:BasePeoleModel = null;
         DisplayUtil.removeForParent(this._icon);
         this._icon = null;
         _p = this;
         _url = ClientConfig.getResPath("achieve/title/" + this._info.curTitle + ".swf");
         ResourceManager.getResource(_url,function(param1:DisplayObject):void
         {
            var _loc2_:TextField = null;
            var _loc3_:Rectangle = null;
            var _loc4_:TextFormat = null;
            var _loc5_:MovieClip = null;
            var _loc6_:Number = NaN;
            var _loc7_:Number = NaN;
            var _loc8_:Number = NaN;
            var _loc9_:Number = NaN;
            if(param1)
            {
               _icon = param1 as Sprite;
               addChild(_icon);
               _loc2_ = _icon.getChildByName("txt") as TextField;
               _loc3_ = null;
               if(_loc2_)
               {
                  _loc2_.autoSize = TextFieldAutoSize.LEFT;
                  if(_loc2_.defaultTextFormat.size != 12)
                  {
                     (_loc4_ = new TextFormat()).size = 12;
                     _loc2_.setTextFormat(_loc4_);
                  }
                  if(_icon["icon"])
                  {
                     _loc5_ = _icon["icon"];
                     _loc6_ = 25;
                     if(_loc5_.width > _loc6_ || _loc5_.height > _loc6_)
                     {
                        _loc5_.scaleX = _loc5_.scaleY = 1;
                        _loc8_ = _loc5_.width;
                        if(_loc5_.height > _loc8_)
                        {
                           _loc8_ = _loc5_.height;
                        }
                        _loc9_ = _loc6_ / _loc8_;
                        _loc5_.scaleX = _loc5_.scaleY = _loc9_;
                     }
                     _loc3_ = _loc5_.getBounds(_icon);
                     _loc7_ = _loc5_.y;
                     _loc5_.y = _loc2_.height + _loc2_.y - _loc5_.height + (_loc3_.y - _loc7_) - 2;
                     _loc5_.x = 0;
                     _loc3_ = _icon.getBounds(_p);
                     _icon.x = -(_loc3_.x + _loc3_.width / 2) + 3;
                     _icon.y = 15 - _loc2_.y;
                  }
               }
               else
               {
                  _loc3_ = _icon.getBounds(_p);
                  _icon.x = -(_loc3_.x + _loc3_.width / 2) + 3;
                  _icon.y = 16;
               }
               _nameContainer.y = 34;
            }
         },"title");
      }
      
      private function getMedal() : void
      {
         var titleName:String;
         var _p:BasePeoleModel;
         var arr:Array = null;
         var color:uint = uint(AchieveXMLInfo.getTitleColor(this._info.curTitle));
         if(color == 16777215)
         {
            this.getOldMedal();
            return;
         }
         this.iconId = AchieveXMLInfo.getTitleIconId(this._info.curTitle);
         titleName = AchieveXMLInfo.getOriginalTitle(this._info.curTitle);
         this._url = ClientConfig.getResPath("achieve/icon/" + this.iconId + ".swf");
         this.isWrap = titleName.split("|").length > 1 || titleName.length > 5;
         if(this.isWrap && titleName.split("|").length == 1)
         {
            arr = titleName.split("");
            arr.splice(5,0,"|");
            titleName = arr.join("");
         }
         if(titleName.lastIndexOf("|") == titleName.length - 1)
         {
            titleName = titleName.replace("|","");
            this.isWrap = false;
         }
         else
         {
            titleName = titleName.replace("|","\r");
         }
         _p = this;
         if(color == 0)
         {
            color = 16777011;
         }
         this.showTitleTxt(titleName,color);
         if(null == this.titleCon)
         {
            this.titleCon = new Sprite();
            this.titleCon.y = defaultY;
            this.titleCon.cacheAsBitmap = true;
            addChild(this.titleCon);
            this.titleCon.mouseChildren = this.titleCon.mouseEnabled = false;
         }
         DisplayUtil.removeAllChild(this.titleCon);
         EventManager.addEventListener(ResourceManager.RESOUCE_ERROR,this.getSptIcon);
         ResourceManager.getResource(this._url,function(param1:DisplayObject):void
         {
            var _loc2_:Number = NaN;
            var _loc3_:Number = NaN;
            var _loc4_:Number = NaN;
            var _loc5_:Bitmap = null;
            EventManager.removeEventListener(ResourceManager.RESOUCE_ERROR,getSptIcon);
            DisplayUtil.removeAllChild(titleCon);
            if(param1)
            {
               _loc2_ = 20;
               param1.scaleX = param1.scaleY = 1;
               _loc3_ = param1.height > param1.width ? param1.height : param1.width;
               _loc4_ = _loc2_ / _loc3_;
               param1.scaleX = param1.scaleY = _loc4_;
               _loc5_ = DisplayUtil.copyDisplayAsBmp(param1);
               _loc5_.x = _loc5_.y = 0;
               titleCon.addChild(_loc5_);
               titleCon.addChild(titleTxt);
               titleTxt.x = param1.width + (65 - titleTxt.width) / 2;
               titleTxt.y = 4;
               titleCon.x = titlIconX;
               titleCon.y = defaultY;
               _nameContainer.y = isWrap ? 46 : 34;
            }
            else
            {
               DebugTrace("achieve/icon/" + iconId + ".swf素材不对");
               _nameContainer.y = defaultTopIconY;
            }
         },"icon");
      }
      
      private function getSptIcon(param1:* = null) : void
      {
         var e:* = param1;
         EventManager.removeEventListener(ResourceManager.RESOUCE_ERROR,this.getSptIcon);
         this._url = ClientConfig.getResPath("achieve/spt/" + this.iconId + ".swf");
         ResourceManager.getResource(this._url,function(param1:DisplayObject):void
         {
            var _loc2_:Number = NaN;
            var _loc3_:Number = NaN;
            var _loc4_:Number = NaN;
            var _loc5_:Bitmap = null;
            DisplayUtil.removeAllChild(titleCon);
            if(param1)
            {
               _loc2_ = 20;
               param1.scaleX = param1.scaleY = 1;
               _loc3_ = param1.height > param1.width ? param1.height : param1.width;
               _loc4_ = _loc2_ / _loc3_;
               param1.scaleX = param1.scaleY = _loc4_;
               _loc5_ = DisplayUtil.copyDisplayAsBmp(param1);
               _loc5_.x = _loc5_.y = 0;
               titleCon.addChild(_loc5_);
               titleCon.addChild(titleTxt);
               titleTxt.x = param1.width + (65 - titleTxt.width) / 2;
               titleTxt.y = 4;
               titleCon.x = titlIconX;
               titleCon.y = defaultY;
               _nameContainer.y = isWrap ? 46 : 34;
            }
            else
            {
               DebugTrace("achieve/spt/" + iconId + ".swf素材不对");
               _nameContainer.y = defaultTopIconY;
            }
         },"spt");
      }
      
      private function showTitleTxt(param1:String, param2:uint = 16777011) : void
      {
         if(this.titleTxt == null)
         {
            this.titleTxt = new TextField();
            this.titleTxt.mouseEnabled = false;
            this.titleTxt.autoSize = TextFieldAutoSize.CENTER;
            this.titleTxt.multiline = true;
            this.titleTxt.cacheAsBitmap = true;
            this.titleTxt.width = 65;
            this.titleTxt.filters = [new GlowFilter(1182489,1,3,3,10,1,false,false)];
         }
         if(this._selfTf == null)
         {
            this._selfTf = new TextFormat();
            this._selfTf.font = "宋体";
            this._selfTf.letterSpacing = 0.5;
            this._selfTf.size = 12;
            this._selfTf.leading = 2;
            this._selfTf.align = TextFormatAlign.CENTER;
         }
         this.titleTxt.text = param1;
         this._selfTf.color = param2;
         this.titleTxt.setTextFormat(this._selfTf);
      }
      
      private function get medalIcon() : Sprite
      {
         return this._icon;
      }
      
      public function showMount(param1:uint) : void
      {
         if(this._mount)
         {
            this._mount.destroy();
            this._mount = null;
         }
         if(param1 == 0)
         {
            return;
         }
         if(!this._info.isVip && ItemXMLInfo.getIsSuper(param1))
         {
            MountManager.changeMount(0);
            return;
         }
         var _loc2_:PetShowInfo = new PetShowInfo();
         _loc2_.petID = param1;
         this._mount = new FlyPetModel(this);
         this._mount.show(_loc2_);
      }
      
      public function showNono(param1:NonoInfo, param2:uint = 0) : void
      {
         param1.flyStyle = param2;
         if(this._nono)
         {
            this._nono.destroy();
            this._nono = null;
         }
         if(param2 == 0)
         {
            this._nono = new NonoModel(param1,this);
         }
         else
         {
            this._nono = new NonoFlyModel(param1,this);
         }
         dispatchEvent(new PeopleActionEvent(PeopleActionEvent.NONO_FOLLOW,param1));
      }
      
      public function hideNono() : void
      {
         NonoManager.addEventListener(NonoEvent.FOLLOW,this.onNonoFollow);
         if(MainManager.actorInfo.mountId == 0 && MainManager.actorInfo.isVip)
         {
            NonoManager.nonoFlyAction();
         }
         else
         {
            this.onNonoFollow(null);
         }
      }
      
      private function onNonoFollow(param1:NonoEvent) : void
      {
         NonoManager.removeEventListener(NonoEvent.FOLLOW,this.onNonoFollow);
         this.destroyNono();
         dispatchEvent(new PeopleActionEvent(PeopleActionEvent.NONO_HOOM));
      }
      
      public function hideNonoForSetFly() : void
      {
         this.destroyNono();
         dispatchEvent(new PeopleActionEvent(PeopleActionEvent.NONO_HOOM));
      }
      
      private function destroyNono() : void
      {
         if(this._nono)
         {
            this._nono.destroy();
            this._nono = null;
         }
      }
      
      public function showNonoShield(param1:uint) : void
      {
         this.isShield = true;
         if(!this.shieldTimer)
         {
            this.shieldTimer = new Timer(param1 * 1000,1);
            this.shieldTimer.addEventListener(TimerEvent.TIMER,this.onShieldTimer);
         }
         this.shieldTimer.reset();
         this.shieldTimer.start();
         if(this.shieldMC == null)
         {
            this.shieldMC = ShotBehaviorManager.getMovieClip("pk_nono_shield");
         }
         this.shieldMC.gotoAndStop(1);
         addChild(this.shieldMC);
      }
      
      public function showShieldMovie() : void
      {
         this.shieldMC.gotoAndPlay(2);
      }
      
      public function showEgg(param1:int = 0) : void
      {
         var _loc2_:int = 0;
         var _loc7_:int = 0;
      }
      
      public function destroyEgg() : void
      {
         if(this.dragonEgg)
         {
            this.dragonEgg.destroy();
            this.dragonEgg = null;
         }
      }
      
      public function showPet(param1:PetShowInfo) : void
      {
         this.destroyPet();
         if(this._info.userID == MainManager.actorID)
         {
            PetManager.showingInfo = param1;
         }
         if(PetXMLInfo.isFlyPet(param1.petID))
         {
            if(this._info.mountId == 0 && this._info.actionType == 0)
            {
               this._pet = new FlyPetModel(this);
            }
            else
            {
               this._pet = new com.robot.core.mode.PetModel(this);
            }
         }
         else if(PetXMLInfo.isRidePet(param1.petID) && PetXMLInfo.isRidePetOpen(param1.petID,this._info))
         {
            if(this._info.mountId == 0 && this._info.actionType == 0)
            {
               this._pet = new FlyPetModel(this);
            }
            else
            {
               this._pet = new com.robot.core.mode.PetModel(this);
            }
         }
         else
         {
            this._pet = new com.robot.core.mode.PetModel(this);
         }
         param1.isEatBrigh = this._info.specialBright;
         this._pet.show(param1);
         dispatchEvent(new PeopleActionEvent(PeopleActionEvent.PET_SHOW,param1));
      }
      
      public function hidePet() : void
      {
         this.destroyPet();
         dispatchEvent(new PeopleActionEvent(PeopleActionEvent.PET_HIDE));
      }
      
      private function destroyPet() : void
      {
         if(this._pet)
         {
            this._pet.destroy();
            this._pet = null;
            this._info.specialBright = false;
         }
      }
      
      public function set topIconY(param1:int) : void
      {
         this._topIconContainer.y = param1;
      }
      
      public function showJobTitle() : void
      {
         if(this._groupLogo)
         {
            return;
         }
         this.clearTopContainer();
         if(this.isClothTeamHonor && this.info && this.info.teamInfo && this.info.teamInfo.id >= 50000)
         {
            SocketConnection.addCmdListener(CommandID.TEAM_GET_INFO,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.TEAM_GET_INFO,arguments.callee);
               var _loc3_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
               _teamLogo = new TeamLogo();
               _teamLogo.info = _loc3_;
               _teamLogo.scaleX = _teamLogo.scaleY = 0.6;
               _topIconContainer.addChild(_teamLogo);
               CommonUI.centerAlign(_teamLogo,_topIconContainer,new Point(0,0));
            });
            SocketConnection.send(CommandID.TEAM_GET_INFO,this.info.teamInfo.id);
            return;
         }
         if(this.info.jobTitle == 0)
         {
            return;
         }
         if(!needShowJobTitle)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getResPath("quickStart/jobTitle/" + this.info.jobTitle + ".swf"),function(param1:DisplayObject):void
         {
            if(param1)
            {
               _jobTitle = param1 as MovieClip;
               _jobTitle.scaleX = _jobTitle.scaleY = 0.8;
               _topIconContainer.addChild(_jobTitle);
               CommonUI.centerAlign(_jobTitle,_topIconContainer,new Point(0,0));
            }
         },"item");
      }
      
      public function showClockAlarm() : void
      {
         if(this._groupLogo)
         {
            return;
         }
         if(this._clockAlarm)
         {
            this._clockAlarm.gotoAndPlay(1);
            return;
         }
         ResourceManager.getResource(ClientConfig.getResPath("nono/shortcutKey/5_ani.swf"),function(param1:DisplayObject):void
         {
            if(param1)
            {
               _clockAlarm = param1 as MovieClip;
               _clockAlarm.gotoAndPlay(1);
               _clockAlarm.buttonMode = true;
               _clockAlarm.addEventListener(MouseEvent.CLICK,onClockAlarm);
               _topIconContainer.addChild(_clockAlarm);
               _clockAlarm.visible = false;
            }
         },"item");
      }
      
      private function onClockAlarm(param1:MouseEvent) : void
      {
         this.showJobTitle();
         ModuleManager.showModule(ClientConfig.getAppModule("NonoAlarmPanel"),"正在打开闹钟小管家....");
      }
      
      public function showGroupLogo() : void
      {
         this.clearTopContainer();
         if(Boolean(this.info.groupInfo) && this.info.groupInfo.leaderID != 0)
         {
            if(this.info.groupInfo.leaderID == this.info.userID)
            {
               if(this._groupLogo == null)
               {
                  this._groupLogo = new GroupLogo(this);
                  this._groupLogo.info = this.info.groupInfo;
                  this._topIconContainer.addChild(this._groupLogo);
               }
            }
            if(this.info.userID != MainManager.actorID)
            {
               if(this._groupFootMC == null)
               {
                  this._groupFootMC = UIManager.getMovieClip("q_mc");
               }
               addChildAt(this._groupFootMC,0);
               if(MainManager.actorInfo.groupInfo)
               {
                  if(MainManager.actorInfo.groupInfo.memberList.indexOf(this.info.userID) != -1)
                  {
                     DisplayUtil.FillColor(this._groupFootMC,101358);
                  }
                  else
                  {
                     DisplayUtil.FillColor(this._groupFootMC,16737792);
                  }
               }
               else
               {
                  DisplayUtil.FillColor(this._groupFootMC,16737792);
               }
            }
         }
         else
         {
            this.showJobTitle();
         }
      }
      
      private function clearTopContainer() : void
      {
         if(this._teamLogo)
         {
            DisplayUtil.removeForParent(this._teamLogo);
            this._teamLogo = null;
         }
         if(this._jobTitle)
         {
            DisplayUtil.removeForParent(this._jobTitle);
            this._jobTitle = null;
         }
         if(this.info)
         {
            ResourceManager.cancelURL(ClientConfig.getResPath("quickStart/jobTitle/" + this.info.jobTitle + ".swf"));
            ResourceManager.cancelURL(ClientConfig.getActiveUrl("screwTeamIcon"));
         }
         if(this._clockAlarm)
         {
            DisplayUtil.removeForParent(this._clockAlarm);
            this._clockAlarm.removeEventListener(MouseEvent.CLICK,this.onClockAlarm);
            this._clockAlarm = null;
         }
         if(this._groupLogo)
         {
            DisplayUtil.removeForParent(this._groupLogo);
            this._groupLogo.destroy();
            this._groupLogo = null;
         }
         if(this._groupFootMC)
         {
            DisplayUtil.removeForParent(this._groupFootMC);
            this._groupFootMC = null;
         }
         DisplayUtil.removeAllChild(this._topIconContainer);
      }
      
      public function specialAction(param1:uint) : void
      {
         this._skeletonSys.specialAction(this,param1);
      }
      
      override public function stop() : void
      {
         super.stop();
         if(this._pet)
         {
            this._pet.stop();
         }
      }
      
      public function stopSpecialAct() : void
      {
         this.direction = Direction.DOWN;
      }
      
      public function takeOffCloth() : void
      {
         this._skeletonSys.takeOffCloth();
      }
      
      public function walkAction(param1:Object, param2:Boolean = true) : void
      {
         if(this.walkEnabled)
         {
            _walk.execute(this,param1,param2);
         }
      }
      
      override public function get width() : Number
      {
         return this._skeletonSys.getBodyMC().width;
      }
      
      public function execBehavior(param1:IBehavior) : void
      {
         param1.execute(this);
      }
      
      public function addEvent() : void
      {
         addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         this.clickBtn.addEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
         this.clickBtn.addEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
         this.clickBtn.addEventListener(MouseEvent.CLICK,this.onClick);
         EventManager.addEventListener("dragonEgg_state_change",this.dragonEggStateChange);
      }
      
      protected function onWalkEnd(param1:Event) : void
      {
         this._skeletonSys.stop();
      }
      
      private function getProtectMC() : MovieClip
      {
         var _loc1_:MovieClip = UIManager.getMovieClip("ui_TandS_Protecte_MC");
         _loc1_.mouseChildren = false;
         _loc1_.mouseEnabled = false;
         return _loc1_;
      }
      
      private function onShieldTimer(param1:TimerEvent) : void
      {
         this.hideShield();
      }
      
      private function hideShield() : void
      {
         this.isShield = false;
         DisplayUtil.removeForParent(this.shieldMC,false);
      }
      
      private function onWalkStart(param1:Event) : void
      {
         this._skeletonSys.play();
      }
      
      public function removeEvent() : void
      {
         removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         this.clickBtn.removeEventListener(MouseEvent.CLICK,this.onClick);
         EventManager.removeEventListener("dragonEgg_state_change",this.dragonEggStateChange);
      }
      
      private function dragonEggStateChange(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         getDefinitionByName("com.robot.app.task.petstory.util.KTool").getMultiValue([124246],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            showEgg(_loc2_);
         });
      }
      
      private function onRollOver(param1:MouseEvent) : void
      {
         if(this._interactiveAction)
         {
            this._interactiveAction.rollOver();
         }
      }
      
      private function onRollOut(param1:MouseEvent) : void
      {
         if(this._interactiveAction)
         {
            this._interactiveAction.rollOut();
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this._interactiveAction)
         {
            this._interactiveAction.click();
         }
      }
      
      private function initAnnualFeeName() : void
      {
         this._annualFeeSprite = UIManager.getSprite("AnnualVipName");
         this.annualChangeName(this.info.nick);
         this._nameContainer.cacheAsBitmap = true;
         this.switchNameDO();
      }
      
      private function annualChangeName(param1:String) : void
      {
         var _loc2_:TextField = this._annualFeeSprite["txt"]["txt"];
         _loc2_.text = param1;
         _loc2_.width = _loc2_.textWidth + 4;
         _loc2_.x = _loc2_.width / 2 * -1;
         if(this._annualFeeSprite["txt"].width > 40)
         {
            this._bodyWidth = this._annualFeeSprite["txt"].width + 10;
         }
         else
         {
            this._bodyWidth = 40;
         }
         this._annualFeeSprite["mc"].width = this._bodyWidth;
         this._annualFeeSprite["leftMc"].x = this._bodyWidth / 2 * -1 + 1;
         this._annualFeeSprite["rightMc"].x = this._bodyWidth / 2 - 1;
         this._annualFeeSprite["mc"].x = 0;
         this._annualFeeSprite.x = 0;
      }
      
      public function get nameContainer() : DisplayObjectContainer
      {
         return this._nameContainer;
      }
      
      public function switchNameDO() : void
      {
         var cls:* = undefined;
         if(this._nameContainer)
         {
            DisplayUtil.removeAllChild(this._nameContainer);
            cls = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
            cls.getOnlineUsersForeverOrDailyVal([this._info.userID,this._yearVipforverId],function(param1:uint):void
            {
               var _loc2_:MovieClip = null;
               if(cls.getBit(param1,9) > 0)
               {
                  DisplayUtil.removeForParent(_nameTxt);
                  _nameContainer.addChild(_annualFeeSprite);
                  _nameContainer.x = 0;
               }
               else
               {
                  _nameContainer.addChild(_nameTxt);
                  _nameContainer.x = 5;
               }
               if(_nameContainer && info && _nameContainer.numChildren > 0 && info.isFamous)
               {
                  _loc2_ = UIManager.getMovieClip("famous_icon");
                  _nameContainer.getChildAt(0).x = _nameContainer.getChildAt(0).x + 5;
                  if(cls.getBit(param1,1) > 0 && Boolean(_annualFeeSprite))
                  {
                     _loc2_.x = titlIconX;
                  }
                  else
                  {
                     _loc2_.x = titlIconX;
                  }
                  _loc2_.y = _nameContainer.getChildAt(0).y + 3;
                  _loc2_.cacheAsBitmap = true;
                  _nameContainer.addChild(_loc2_);
               }
            });
         }
      }
      
      public function isClothTianshen() : Boolean
      {
         var _loc1_:uint = 0;
         for each(_loc1_ in MainManager.actorInfo.clothIDs)
         {
            if(_loc1_ == 1300046 || _loc1_ == 1300047 || _loc1_ == 1300048 || _loc1_ == 1300049)
            {
               return true;
            }
         }
         return false;
      }
      
      public function isClothQilin() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300250) > -1 && this._info.clothIDs.indexOf(1300251) > -1 && this._info.clothIDs.indexOf(1300252) > -1 && this._info.clothIDs.indexOf(1300253) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function isClothMachine() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300063) > -1 && this._info.clothIDs.indexOf(1300064) > -1 && this._info.clothIDs.indexOf(1300065) > -1 && this._info.clothIDs.indexOf(1300066) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function isClothLightning() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300073) > -1 && this._info.clothIDs.indexOf(1300074) > -1 && this._info.clothIDs.indexOf(1300075) > -1 && this._info.clothIDs.indexOf(1300076) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function get isClothTeamHonor() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300069) > -1 && this._info.clothIDs.indexOf(1300070) > -1 && this._info.clothIDs.indexOf(1300071) > -1 && this._info.clothIDs.indexOf(1300072) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function get isClothPurpleDragon() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300330) > -1 && this._info.clothIDs.indexOf(1300331) > -1 && this._info.clothIDs.indexOf(1300332) > -1 && this._info.clothIDs.indexOf(1300333) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function get ClothHoyPartCount() : uint
      {
         var _loc1_:uint = 0;
         if(this._info.clothIDs.indexOf(1300326) > -1)
         {
            _loc1_++;
         }
         if(this._info.clothIDs.indexOf(1300327) > -1)
         {
            _loc1_++;
         }
         if(this._info.clothIDs.indexOf(1300328) > -1)
         {
            _loc1_++;
         }
         if(this._info.clothIDs.indexOf(1300329) > -1)
         {
            _loc1_++;
         }
         return _loc1_;
      }
      
      public function get isClothCifeng() : Boolean
      {
         if(this._info.clothIDs.indexOf(100346) > -1 && this._info.clothIDs.indexOf(100347) > -1 && this._info.clothIDs.indexOf(100348) > -1 && this._info.clothIDs.indexOf(100349) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function get isClothHuanYingJianke() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300372) > -1 && this._info.clothIDs.indexOf(1300373) > -1 && this._info.clothIDs.indexOf(1300374) > -1 && this._info.clothIDs.indexOf(1300375) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function get isClothYinyiLieshou() : Boolean
      {
         if(this._info.clothIDs.indexOf(100338) > -1 && this._info.clothIDs.indexOf(100339) > -1 && this._info.clothIDs.indexOf(100340) > -1 && this._info.clothIDs.indexOf(100341) > -1)
         {
            return true;
         }
         return false;
      }
      
      public function get isClothXiuchihonglangke() : Boolean
      {
         if(this._info.clothIDs.indexOf(1300618) > -1 && this._info.clothIDs.indexOf(1300619) > -1 && this._info.clothIDs.indexOf(1300620) > -1 && this._info.clothIDs.indexOf(1300621) > -1)
         {
            return true;
         }
         return false;
      }
   }
}
