package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.nono.NonoController;
   import com.robot.app.task.control.TaskController_89;
   import com.robot.app.task.petstory.app.PetBagPanel;
   import com.robot.app.task.petstory.app.PetVisitPanel;
   import com.robot.app.task.petstory.app.SyllabusPanel;
   import com.robot.app.task.petstory.app.WalkOgreModel;
   import com.robot.app.task.petstory.app.train.TrainData;
   import com.robot.app.task.petstory.app.train.TrainGradePanel;
   import com.robot.app.task.petstory.app.train.TrainTestPanel;
   import com.robot.app.task.petstory.evt.PetBagEvent;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.utils.ByteArray;
   import flash.utils.getQualifiedClassName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_485 extends BaseMapProcess
   {
      
      private static var _map:BaseMapProcess;
      
      public static var _isActive:Boolean = false;
       
      
      private var _load:URLLoader;
      
      private var _petList:Array;
      
      private var _petPoints:Array;
      
      private var _dialogs:Array;
      
      private var _titleList:Array;
      
      private var _arrowMC:MovieClip;
      
      private var _trialsMC:MovieClip;
      
      private var _testMC:SimpleButton;
      
      private var _trainDoor:SimpleButton;
      
      private var _lightMC:MovieClip;
      
      private var _highGradeBtn:MovieClip;
      
      private var _lowGradeBtn:MovieClip;
      
      private var _isHigh:Boolean = false;
      
      private var door0_btn:SimpleButton;
      
      private var hit_0:MovieClip;
      
      private var _schoolBtn:SimpleButton;
      
      private var _monList:Array;
      
      public function MapProcess_485()
      {
         this._monList = [];
         super();
      }
      
      public static function onPanelClose() : void
      {
         var b:Boolean;
         var len:int;
         var i:int;
         var o:Object = null;
         var a:Array = null;
         var s:String = null;
         if(MapManager.currentMap.id != 485)
         {
            return;
         }
         b = true;
         len = int(LevelManager.appLevel.numChildren);
         i = 0;
         while(i < len)
         {
            o = LevelManager.appLevel.getChildAt(i);
            a = getQualifiedClassName(o).split(".");
            s = String(a[a.length - 1]);
            if(s == "PetVisit_UI" || s == "Score_UI")
            {
               b = false;
               break;
            }
            i++;
         }
         if(b && _isActive)
         {
            _isActive = false;
            AnimateManager.playMcAnimate(_map.conLevel["naxi"],2,"mc_2",function():void
            {
               _map.conLevel["naxi"].gotoAndStop(3);
               NpcDialog.show(NPC.NAXI,["HI，" + MainManager.actorInfo.formatNick + "！我现在正在精灵学院上课呢！我和你的精灵是同学哦！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.NAXI,["我经常听他们称赞你呢！所以才跑出来看看！如果你有足够的实力，我就成为你的伙伴！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["naxi"],3,"mc_3",function():void
                     {
                        NpcDialog.show(NPC.NAXI,["来吧！让我看看你是不是真的这么强！嘿嘿！"],null,null,false,function():void
                        {
                           ToolTipManager.add(MapManager.currentMap.controlLevel["naxi"],"纳西");
                           _map.conLevel["naxi"].buttonMode = true;
                           _map.conLevel["naxi"].addEventListener(MouseEvent.CLICK,onNaxiClick);
                        });
                     });
                  });
               });
            });
         }
      }
      
      private static function onNaxiClick(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("纳西",0);
      }
      
      private static function staticDestroy() : void
      {
         ToolTipManager.remove(_map.conLevel["naxi"]);
         _map.conLevel["naxi"].removeEventListener(MouseEvent.CLICK,onNaxiClick);
         _map = null;
      }
      
      override protected function init() : void
      {
         if(NonoController.alarmArrow[2])
         {
            CommonUI.addYellowArrow(conLevel["lowGrade"],-5,-50);
            CommonUI.addYellowArrow(conLevel["highGrade"],-5,-50);
            NonoController.alarmArrow[2] = 0;
         }
         this._lightMC = conLevel["light"];
         this._lightMC.visible = false;
         this._testMC = conLevel["testMC"];
         this._testMC.addEventListener(MouseEvent.CLICK,this.onMouseTest);
         ToolTipManager.add(conLevel["testMC"],"体检");
         this._trialsMC = conLevel["trialsMC"];
         ToolTipManager.add(conLevel["trialsMC"],"试炼之塔");
         this._trialsMC.buttonMode = true;
         this._trialsMC.mouseChildren = false;
         this._trialsMC.addEventListener(MouseEvent.CLICK,this.onMouseTrialsHandler);
         this._trainDoor = conLevel["trainDoor"];
         ToolTipManager.add(conLevel["trainDoor"],"训练室");
         this._trainDoor.addEventListener(MouseEvent.CLICK,this.onMouseTrials);
         this._highGradeBtn = conLevel["highGrade"];
         this._highGradeBtn.buttonMode = true;
         ToolTipManager.add(conLevel["highGrade"],"高级班");
         this._highGradeBtn.addEventListener(MouseEvent.CLICK,this.onHighGrade);
         this._lowGradeBtn = conLevel["lowGrade"];
         this._lowGradeBtn.buttonMode = true;
         ToolTipManager.add(conLevel["lowGrade"],"初级班");
         this._lowGradeBtn.addEventListener(MouseEvent.CLICK,this.onLowGrade);
         this._schoolBtn = conLevel["schoolBtn"];
         this._schoolBtn.addEventListener(MouseEvent.CLICK,this.onMouseBook);
         ToolTipManager.add(this._schoolBtn,"精灵学院手册");
         this.startProgress();
         _map = this;
      }
      
      private function onMouseBook(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("PetSchoolBook"),"正在加载精灵学院手册....");
      }
      
      private function startProgress() : void
      {
         this.loadXMLConfig();
      }
      
      private function loadXMLConfig() : void
      {
         this._load = new URLLoader();
         this._load.addEventListener(Event.COMPLETE,this.onLoadXMLComplete);
         this._load.load(new URLRequest(ClientConfig.getResPath("module/ext/config/collegeConfig.xml")));
      }
      
      private function onLoadXMLComplete(param1:Event) : void
      {
         (param1.currentTarget as URLLoader).removeEventListener(Event.COMPLETE,this.onLoadXMLComplete);
         var _loc2_:XML = XML(param1.target.data);
         this._petList = this.parseString2Array(_loc2_["pet"].@ids);
         this._petPoints = this.parseString2Array(_loc2_["pet"].@points);
         var _loc3_:XMLList = _loc2_["dialogs"]["dialog"];
         this.initDialog(_loc3_);
         var _loc4_:XMLList = _loc2_["subjects"]["class"];
         this.initTitle(_loc4_);
         if(TasksManager.getTaskStatus(686) == TasksManager.COMPLETE)
         {
            this.initNPC();
         }
      }
      
      private function initDialog(param1:XMLList) : void
      {
         var _loc2_:XML = null;
         this._dialogs = new Array();
         for each(_loc2_ in param1)
         {
            this._dialogs.push(_loc2_);
         }
      }
      
      private function initTitle(param1:XMLList) : void
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         this._titleList = new Array();
         for each(_loc3_ in param1)
         {
            _loc2_ = new Object();
            _loc2_.id = _loc3_.@id;
            _loc2_.titleList = this.parseString2Array(_loc3_.@titleList);
            _loc2_.iconList = this.parseString2Array(_loc3_.@iconList);
            _loc2_.nameList = this.parseString2Array(_loc3_.@nameList);
            this._titleList.push(_loc2_);
         }
      }
      
      private function initNPC() : void
      {
         var _loc1_:Boolean = Boolean(BufferRecordManager.getState(MainManager.actorInfo,130));
         if(_loc1_)
         {
            this.randomPetsShow();
         }
      }
      
      private function randomPetsShow() : void
      {
         var _loc3_:uint = 0;
         var _loc1_:Array = this._petList.concat();
         var _loc2_:uint = 0;
         while(_loc2_ < 8)
         {
            _loc3_ = uint(Math.random() * _loc1_.length);
            this.createMon(_loc2_,_loc1_[_loc3_]);
            _loc1_.splice(_loc3_,1);
            _loc2_++;
         }
      }
      
      private function createMon(param1:uint, param2:uint) : void
      {
         var _loc3_:WalkOgreModel = null;
         if(MapManager.currentMap.id == 485)
         {
            _loc3_ = new WalkOgreModel(param1,this._dialogs);
            _loc3_.isAuto = true;
            _loc3_.show(param2,this.parseString2Points(this._petPoints[param1]));
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,this.onMonClick);
            this._monList.push(_loc3_);
         }
      }
      
      private function onMonClick(param1:RobotEvent) : void
      {
         var _loc2_:WalkOgreModel = param1.currentTarget as WalkOgreModel;
         MainManager.actorModel.walkAction(_loc2_.pos);
         this.showRadomDialog(_loc2_);
      }
      
      private function onHighGrade(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(conLevel["lowGrade"]);
         CommonUI.removeYellowArrow(conLevel["highGrade"]);
         this._highGradeBtn.gotoAndPlay(1);
         this.askServer2();
      }
      
      private function onLowGrade(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(conLevel["lowGrade"]);
         CommonUI.removeYellowArrow(conLevel["highGrade"]);
         this._lowGradeBtn.gotoAndPlay(1);
         this.askServer();
      }
      
      private function onMouseTrials(param1:MouseEvent) : void
      {
         new TrainGradePanel();
      }
      
      private function onMouseTrialsHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this._trialsMC["mc"].addFrameScript(this._trialsMC["mc"].totalFrames - 1,null);
         this._trialsMC["mc"].addFrameScript(this._trialsMC["mc"].totalFrames - 1,function():void
         {
            _trialsMC["mc"].addFrameScript(_trialsMC["mc"].totalFrames - 1,null);
            _trialsMC["mc"].gotoAndStop(1);
            TaskController_89.oneStage(_lightMC);
         });
         this._trialsMC["mc"].gotoAndPlay(2);
      }
      
      private function onMouseTest(param1:MouseEvent) : void
      {
         EventManager.addEventListener(PetBagPanel.PET_CHOOSE,this.getTestPetData);
         var _loc2_:PetBagPanel = new PetBagPanel(1);
         _loc2_.addEventListener(PetBagEvent.CLOSE_PET_BAG,this.onMosueDestory);
      }
      
      private function getTestPetData(param1:DynamicEvent) : void
      {
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,this.getTestPetData);
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(_loc2_)
         {
            new TrainTestPanel(_loc2_);
            DebugTrace.show("宠物信息:" + "名称:" + PetXMLInfo.getName(_loc2_.id) + "\r" + "属性:" + PetXMLInfo.getTypeCN(_loc2_.id) + "\r" + "等级:" + _loc2_.level + "\r" + "性格:" + NatureXMLInfo.getName(_loc2_.nature));
         }
      }
      
      private function showRadomDialog(param1:WalkOgreModel) : void
      {
         param1.showBox(this._dialogs[int(Math.random() * this._dialogs.length)]);
      }
      
      private function parseString2Array(param1:String) : Array
      {
         return param1.split("|");
      }
      
      private function parseString2Points(param1:String) : Point
      {
         var _loc2_:Array = param1.split(":");
         return new Point(_loc2_[0],_loc2_[1]);
      }
      
      private function dialogControl(param1:uint) : void
      {
         var param:uint = param1;
         switch(param)
         {
            case 1:
               NpcDialog.show(NPC.TE_RUI,["欢迎来到精灵学院！精灵学院已经开学，这是你的校服，进入精灵学院记得要穿上校服哦！"],["我明白了！"],[function():void
               {
                  ItemAction.buyMultiItem(1,"学员束腰",100618);
                  showArrow();
                  EventManager.addEventListener(ItemAction.BUY_MUILTY,function():void
                  {
                     EventManager.removeEventListener(ItemAction.BUY_MUILTY,arguments.callee);
                     ItemManager.getCloth();
                  });
                  BufferRecordManager.setState(MainManager.actorInfo,130,true,function():void
                  {
                  });
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.LOWFUDAO,["欢迎来到精灵学院，我是0xff0000初级班0xffffff的精灵辅导员，50级以下的精灵适合在我这里上课哦，要带你的精灵上课吗？"],["我要带我的精灵上课！","等会再来！"],[function():void
               {
                  if(_arrowMC)
                  {
                     DisplayUtil.removeForParent(_arrowMC);
                  }
                  showPetBag();
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.LOWFUDAO,["欢迎来到精灵学院，我是0xff0000初级班0xffffff的精灵辅导员，50级以下的精灵适合在我这里上课哦，要带你的精灵上课吗？"],["我要带我的精灵上课！","我来探望我的精灵呢！","等会再来！"],[function():void
               {
                  if(_arrowMC)
                  {
                     DisplayUtil.removeForParent(_arrowMC);
                  }
                  showPetBag();
               },function():void
               {
                  TrainData.isHigh = false;
                  new PetVisitPanel(_titleList);
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.LOWFUDAO,["欢迎来到精灵学院，我是0xff0000初级班0xffffff的精灵辅导员，50级以下的精灵适合在我这里上课哦，要带你的精灵上课吗？"],["我要带我的精灵上课！","我来探望我的精灵呢！","等会再来！"],[function():void
               {
                  NpcDialog.show(NPC.LOWFUDAO,["非常抱歉，你最多只能让4只精灵在这里上课哦！如果想让更多精灵同时上课的话，需要超能NoNo的帮助哦！"],["获得超能NoNo的超能力！","我知道了！"],[function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  }]);
               },function():void
               {
                  TrainData.isHigh = false;
                  new PetVisitPanel(_titleList);
               }]);
               break;
            case 5:
               NpcDialog.show(NPC.LOWFUDAO,["欢迎来到精灵学院，我是0xff0000初级班0xffffff的精灵辅导员，50级以下的精灵适合在我这里上课哦，要带你的精灵上课吗？"],["我要带我的精灵上课！","我来探望我的精灵呢！","等会再来！"],[function():void
               {
                  NpcDialog.show(NPC.LOWFUDAO,["非常抱歉，你最多只能让8只精灵在这里上课哦！"],["我知道了！"],[function():void
                  {
                  }]);
               },function():void
               {
                  TrainData.isHigh = false;
                  new PetVisitPanel(_titleList);
               }]);
               break;
            case 6:
               NpcDialog.show(NPC.HIGHTFUDAO,["我是0xff0000高级班0xffffff的精灵辅导员，50级以上的精灵每天可以上3节课，我的训练可是很严格的哟！你要带你的精灵上课吗？"],["我要带我的精灵上课！","等会再来！"],[function():void
               {
                  if(_arrowMC)
                  {
                     DisplayUtil.removeForParent(_arrowMC);
                  }
                  showPetBag(true);
               }]);
               break;
            case 7:
               NpcDialog.show(NPC.HIGHTFUDAO,["我是0xff0000高级班0xffffff的精灵辅导员，50级以上的精灵每天可以上3节课，我的训练可是很严格的哟！你要带你的精灵上课吗？"],["我要带我的精灵上课！","我来探望我的精灵呢！","等会再来！"],[function():void
               {
                  if(_arrowMC)
                  {
                     DisplayUtil.removeForParent(_arrowMC);
                  }
                  showPetBag(true);
               },function():void
               {
                  TrainData.isHigh = true;
                  new PetVisitPanel(_titleList);
               }]);
               break;
            case 8:
               NpcDialog.show(NPC.HIGHTFUDAO,["我是0xff0000高级班0xffffff的精灵辅导员，50级以上的精灵每天可以上3节课，我的训练可是很严格的哟！你要带你的精灵上课吗？"],["我要带我的精灵上课！","我来探望我的精灵呢！","等会再来！"],[function():void
               {
                  NpcDialog.show(NPC.HIGHTFUDAO,["非常抱歉，你最多只能让4只精灵在这里上课哦！如果想让更多精灵同时上课的话，需要超能NoNo的帮助哦！"],["获得超能NoNo的超能力！","我知道了！"],[function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  }]);
               },function():void
               {
                  TrainData.isHigh = true;
                  new PetVisitPanel(_titleList);
               }]);
               break;
            case 9:
               NpcDialog.show(NPC.HIGHTFUDAO,["我是0xff0000高级班0xffffff的精灵辅导员，50级以上的精灵每天可以上3节课，我的训练可是很严格的哟！你要带你的精灵上课吗？"],["我要带我的精灵上课！","我来探望我的精灵呢！","等会再来！"],[function():void
               {
                  NpcDialog.show(NPC.HIGHTFUDAO,["非常抱歉，你最多只能让8只精灵在这里上课哦！"],["我知道了！"],[function():void
                  {
                  }]);
               },function():void
               {
                  TrainData.isHigh = true;
                  new PetVisitPanel(_titleList);
               }]);
         }
      }
      
      private function showPetBag(param1:Boolean = false) : void
      {
         var _loc2_:PetBagPanel = null;
         EventManager.addEventListener(PetBagPanel.PET_CHOOSE,this.getPetData);
         if(param1)
         {
            TrainData.isHigh = true;
            _loc2_ = new PetBagPanel(2,true);
         }
         else
         {
            TrainData.isHigh = false;
            _loc2_ = new PetBagPanel(3);
         }
         _loc2_.addEventListener(PetBagEvent.CLOSE_PET_BAG,this.onMosueDestory);
      }
      
      private function onMosueDestory(param1:PetBagEvent) : void
      {
         param1.currentTarget.removeEventListener(PetBagEvent.CLOSE_PET_BAG,this.onMosueDestory);
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,this.getPetData);
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,this.getTestPetData);
      }
      
      private function getPetData(param1:DynamicEvent) : void
      {
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,this.getPetData);
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(_loc2_)
         {
            if(TrainData.isHigh)
            {
               SyllabusPanel.getInstance().setData(this._titleList,2,_loc2_.catchTime);
            }
            else
            {
               SyllabusPanel.getInstance().setData(this._titleList,1,_loc2_.catchTime);
            }
         }
      }
      
      private function askServer() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_INFO_CLASS,this.onGetPetInfo);
         SocketConnection.send(CommandID.GET_INFO_CLASS);
      }
      
      private function onGetPetInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_INFO_CLASS,this.onGetPetInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint;
         if((_loc4_ = _loc2_.readUnsignedInt()) > 0)
         {
            if(_loc4_ >= _loc3_)
            {
               if(MainManager.actorInfo.superNono)
               {
                  this.dialogControl(5);
               }
               else
               {
                  this.dialogControl(4);
               }
            }
            else
            {
               this.dialogControl(3);
            }
         }
         else
         {
            this.dialogControl(2);
         }
      }
      
      private function askServer2() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_INFO_CLASS,this.onGetPetInfo2);
         SocketConnection.send(CommandID.GET_INFO_CLASS);
      }
      
      private function onGetPetInfo2(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_INFO_CLASS,this.onGetPetInfo2);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint;
         if((_loc4_ = _loc2_.readUnsignedInt()) > 0)
         {
            if(_loc4_ >= _loc3_)
            {
               if(MainManager.actorInfo.superNono)
               {
                  this.dialogControl(9);
               }
               else
               {
                  this.dialogControl(8);
               }
            }
            else
            {
               this.dialogControl(7);
            }
         }
         else
         {
            this.dialogControl(6);
         }
      }
      
      private function showArrow() : void
      {
         this._arrowMC = UIManager.getMovieClip("Arrows_UI");
         if(this._arrowMC)
         {
            this._arrowMC.x = 68;
            this._arrowMC.y = -34;
            NpcController.getNpc(115).addChild(this._arrowMC);
         }
      }
      
      override public function destroy() : void
      {
         if(this._trialsMC)
         {
            this._trialsMC["mc"].addFrameScript(this._trialsMC["mc"].totalFrames - 1,null);
         }
         CommonUI.removeYellowArrow(conLevel["lowGrade"]);
         CommonUI.removeYellowArrow(conLevel["highGrade"]);
         NpcController.showNpc(115);
         var _loc1_:uint = 0;
         while(_loc1_ < this._monList.length)
         {
            (this._monList[_loc1_] as WalkOgreModel).destroy();
            _loc1_++;
         }
         this._monList.length = 0;
         this._monList = null;
         this._load = null;
         this._petList = null;
         this._petPoints = null;
         this._dialogs = null;
         this._testMC.removeEventListener(MouseEvent.CLICK,this.onMouseTest);
         this._testMC = null;
         staticDestroy();
      }
   }
}
