package com.robot.app.task.petstory
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.aticon.PeculiarAction;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.event.UserEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.Delegate;
   import org.taomee.utils.DisplayUtil;
   
   public class Task_745
   {
      
      private static const TASKID:uint = 745;
      
      private static var _instance:com.robot.app.task.petstory.Task_745;
       
      
      private var _map:BaseMapProcess;
      
      private var _petList:Array;
      
      private var _isSteup:Boolean = false;
      
      private var bt:MovieClip;
      
      private var _curtPetId:uint = 0;
      
      private var _petNameList:Array;
      
      public function Task_745(param1:PrivateClass)
      {
         this._petList = [101,144,496,61,288,104];
         this._petNameList = ["卡塔","奇塔","西塔","卡丹","厄斯","卡西"];
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.Task_745
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.Task_745(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         if(this._isSteup == true)
         {
            (this._map.typeLevel["roadMC"] as MovieClip).visible = false;
            MapManager.currentMap.makeMapArray();
            (this._map.depthLevel["macMC"] as MovieClip).visible = false;
         }
         (this._map.depthLevel["lightMC"] as MovieClip).mouseEnabled = false;
         (this._map.depthLevel["lightMC"] as MovieClip).mouseChildren = false;
         (this._map.depthLevel["petMC"] as MovieClip).visible = false;
         (this._map.depthLevel["petMC"] as MovieClip).buttonMode = true;
         ToolTipManager.add(this._map.conLevel["boxMC"] as SimpleButton,"兑换箱");
         (this._map.conLevel["boxMC"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onBox);
         (this._map.conLevel["bottomBtn"] as MovieClip).buttonMode = true;
         SocketConnection.addCmdListener(CommandID.MAC_KING_CHANGE_CLOTH,this.onUserChange);
         UserManager.addEventListener(UserEvent.INFO_CHANGE,this.onMapUserInfoChange);
         var _loc2_:uint = 0;
         while(_loc2_ < 6)
         {
            ToolTipManager.add(this._map.conLevel["pet_" + _loc2_] as MovieClip,this._petNameList[_loc2_]);
            _loc2_++;
         }
         ToolTipManager.add(this._map.depthLevel["startBtn"] as SimpleButton,"启动开关");
         this.checkTask();
      }
      
      private function onMapUserInfoChange(param1:UserEvent) : void
      {
         UserManager.removeEventListener(UserEvent.INFO_CHANGE,this.onMapUserInfoChange);
         DebugTrace.show(MapManager.currentMap.id);
         SocketConnection.addCmdListener(CommandID.MAC_KING_CHECK_ALL_USER,this.onCheckAll);
         SocketConnection.send(CommandID.MAC_KING_CHECK_ALL_USER);
      }
      
      private function checkTask() : void
      {
         var status:uint = uint(TasksManager.getTaskStatus(TASKID));
         if(status == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASKID,function(param1:Boolean):void
            {
               if(param1)
               {
                  initProcess_1();
               }
            });
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASKID,this.getTaskStates);
         }
         else if(status == TasksManager.COMPLETE)
         {
            this.initProcess_3();
         }
      }
      
      private function getTaskStates(param1:Array) : void
      {
         if(!param1[0])
         {
            this.initProcess_1();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            this.initProcess_2();
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
            this.initProcess_3();
         }
      }
      
      private function initProcess_1() : void
      {
         (this._map.depthLevel["petMC"] as MovieClip).visible = true;
         CommonUI.addYellowArrow(this._map.depthLevel["petMC"] as MovieClip,(this._map.depthLevel["petMC"] as MovieClip).width / 2,0);
         (this._map.depthLevel["petMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMousePet);
      }
      
      private function initProcess_2() : void
      {
         (this._map.depthLevel["petMC"] as MovieClip).visible = true;
         KTool.getFrameMc(this._map.depthLevel["petMC"] as MovieClip,2,"",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var mc:MovieClip = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               dialogSwitch(2);
            });
         });
      }
      
      private function initProcess_3() : void
      {
         (this._map.depthLevel["petMC"] as MovieClip).visible = true;
         (this._map.depthLevel["petMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMousePet_1);
         (this._map.depthLevel["startBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onStartHandler);
      }
      
      private function onMousePet(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(this._map.depthLevel["petMC"] as MovieClip);
         this.dialogSwitch(1);
         ToolTipManager.add(this._map.depthLevel["onMC"] as MovieClip,"灯开关");
         (this._map.depthLevel["onMC"] as MovieClip).buttonMode = true;
         (this._map.depthLevel["onMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onLightHander);
      }
      
      private function onMousePet_1(param1:MouseEvent) : void
      {
         this.dialogSwitch(3);
      }
      
      private function onItemList(param1:ItemEvent) : void
      {
         var num_1:SingleItemInfo;
         var status:uint = 0;
         var event:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onItemList);
         num_1 = ItemManager.getCollectionInfo(400883);
         if(num_1 != null)
         {
            if(num_1.itemNum >= 5)
            {
               status = uint(TasksManager.getTaskStatus(TASKID));
               if(status != TasksManager.COMPLETE)
               {
                  TasksManager.complete(TASKID,2,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        dialogSwitch(4);
                     }
                  });
               }
               else
               {
                  this.dialogSwitch(4);
               }
            }
            else
            {
               this.dialogSwitch(5);
            }
         }
         else
         {
            this.dialogSwitch(5);
         }
      }
      
      private function onStartHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(this._map.depthLevel);
         (this._map.depthLevel["startBtn"] as SimpleButton).mouseEnabled = false;
         KTool.getFrameMc(this._map.depthLevel["doorMC"] as MovieClip,1,"mc",function(param1:DisplayObject):void
         {
            var door:MovieClip = null;
            var o:DisplayObject = param1;
            door = o as MovieClip;
            KTool.getFrameMc(door,2,"mc",function(param1:DisplayObject):void
            {
               var p:DisplayObject = param1;
               var mc:MovieClip = p as MovieClip;
               var petId:uint = uint(_petList[uint(Math.random() * _petList.length)]);
               _curtPetId = petId;
               ResourceManager.getResource(ClientConfig.getPetSwfPath(petId),function(param1:DisplayObject):void
               {
                  var _loc2_:MovieClip = param1 as MovieClip;
                  DisplayUtil.removeAllChild(door["conMC"] as MovieClip);
                  (door["conMC"] as MovieClip).addChild(_loc2_);
                  petWalkToPoint(_loc2_,new Point(-93,94));
               },"pet");
               AnimateManager.playMcAnimate(mc,1,"",function():void
               {
               });
            });
         });
      }
      
      private function petWalkToPoint(param1:MovieClip, param2:Point) : void
      {
         var _loc3_:String = String(Direction.getStr(new Point(param1.x,param1.y),param2));
         param1.gotoAndStop(_loc3_);
         TweenLite.to(param1,2,{
            "x":param2.x,
            "y":param2.y,
            "onComplete":this.onWalkCmp,
            "onCompleteParams":[param1]
         });
      }
      
      private function onWalkCmp(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         KTool.getFrameMc(this._map.depthLevel["doorMC"] as MovieClip,1,"mc",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var door:MovieClip = o as MovieClip;
            KTool.getFrameMc(door,3,"mc",function(param1:DisplayObject):void
            {
               var p:DisplayObject = param1;
               var door_2:MovieClip = p as MovieClip;
               AnimateManager.playMcAnimate(door_2,1,"",function():void
               {
                  mc.buttonMode = true;
                  mc.addEventListener(MouseEvent.CLICK,onClickFight);
                  (_map.depthLevel["startBtn"] as SimpleButton).mouseEnabled = true;
               });
            });
         });
      }
      
      private function onClickFight(param1:MouseEvent) : void
      {
         var _loc2_:uint = uint(this._petList.indexOf(this._curtPetId) + 6);
         FightManager.fightWithBoss(PetBookXMLInfo.getName(this._curtPetId),_loc2_);
      }
      
      private function onLightHander(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (this._map.depthLevel["petMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onMousePet);
         CommonUI.removeYellowArrow(this._map.depthLevel["onMC"] as MovieClip);
         (this._map.depthLevel["onMC"] as MovieClip).mouseEnabled = false;
         KTool.getFrameMc(this._map.depthLevel["onMC"] as MovieClip,2,"",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var mc:MovieClip = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               (_map.depthLevel["lightMC"] as MovieClip).gotoAndStop(2);
               TasksManager.complete(TASKID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     initProcess_2();
                  }
               });
            });
         });
      }
      
      private function onMac(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(this._map.depthLevel["macMC"] as MovieClip);
         if(this._isSteup == true)
         {
            Alarm.show("你已经在泰坦斯机体里了！");
            return;
         }
         SocketConnection.addCmdListener(CommandID.MAC_KING_PUT_ON_CLOTH,this.onPutOnCloth);
         SocketConnection.send(CommandID.MAC_KING_PUT_ON_CLOTH,1);
      }
      
      private function onBox(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MacKingExchangePanel"),"正在打开面板");
      }
      
      private function onPutOnCloth(param1:SocketEvent) : void
      {
         (this._map.depthLevel["macMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onMac);
         KTool.expendItem(400883,5);
         SocketConnection.removeCmdListener(CommandID.MAC_KING_PUT_ON_CLOTH,this.onPutOnCloth);
         this._isSteup = true;
         ResourceManager.getResource(ClientConfig.getResPath("pet/swf/bt.swf"),this.onLoadComplete,"pet");
         (this._map.typeLevel["roadMC"] as MovieClip).visible = false;
         MapManager.currentMap.makeMapArray();
      }
      
      private function onTaskOffCloth(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MAC_KING_PUT_ON_CLOTH,this.onTaskOffCloth);
         this.takeOffAction();
         (this._map.depthLevel["macMC"] as MovieClip).visible = true;
         (this._map.typeLevel["roadMC"] as MovieClip).visible = true;
         MapManager.currentMap.makeMapArray();
      }
      
      private function takeOffAction() : void
      {
         DisplayUtil.removeForParent(this.bt);
         this.bt = null;
         var _loc1_:PeculiarAction = new PeculiarAction();
         _loc1_.standUp(MainManager.actorModel.skeleton as EmptySkeletonStrategy);
         MainManager.actorModel.clickMc.y = -50;
         MainManager.actorModel.removeEventListener(RobotEvent.CHANGE_DIRECTION,this.onChange);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         MainManager.actorModel.skeleton.getBodyMC().visible = true;
         this._isSteup = false;
      }
      
      private function onLoadComplete(param1:DisplayObject) : void
      {
         var o:DisplayObject = param1;
         this.bt = o as MovieClip;
         this.bt.gotoAndStop("right");
         this.playOrStopChild(this.bt,"mc",false);
         MainManager.actorModel.skeleton.getBodyMC().gotoAndStop("right");
         MainManager.actorModel.skeleton.getBodyMC().visible = false;
         if(MainManager.actorModel.nono)
         {
            NonoManager.addEventListener(NonoEvent.HOOM,function(param1:NonoEvent):void
            {
               start();
            });
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,0);
         }
         else
         {
            this.start();
         }
      }
      
      private function start() : void
      {
         LevelManager.openMouseEvent();
         NonoManager.removeEventListener(NonoEvent.HOOM,arguments.callee);
         var _loc2_:PeculiarAction = new PeculiarAction();
         _loc2_.keepUp(MainManager.actorModel.skeleton as EmptySkeletonStrategy,-65);
         if(this.bt)
         {
            MainManager.actorModel.addChildAt(this.bt,1);
         }
         MainManager.actorModel.clickMc.y = -95;
         (this._map.depthLevel["macMC"] as MovieClip).visible = false;
         MainManager.actorModel.addEventListener(RobotEvent.CHANGE_DIRECTION,this.onChange);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
      }
      
      private function playOrStopChild(param1:MovieClip, param2:String, param3:Boolean) : void
      {
         var mc:MovieClip = param1;
         var child:String = param2;
         var b:Boolean = param3;
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(mc[child])
            {
               if(b)
               {
                  mc[child].play();
               }
               else
               {
                  mc[child].gotoAndStop(1);
               }
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
            }
         });
      }
      
      private function onChange(param1:DynamicEvent) : void
      {
         var _loc2_:String = param1.paramObject as String;
         this.bt.gotoAndStop(_loc2_);
      }
      
      private function onWalkStart(param1:RobotEvent) : void
      {
         this.playOrStopChild(this.bt,"mc",true);
      }
      
      private function onWalkEnd(param1:RobotEvent) : void
      {
         this.playOrStopChild(this.bt,"mc",false);
      }
      
      private function onUserChange(param1:SocketEvent) : void
      {
         var _loc7_:BasePeoleModel = null;
         var _loc8_:PeculiarAction = null;
         var _loc3_:ByteArray = param1.data as ByteArray;
         var _loc4_:uint = _loc3_.readUnsignedInt();
         var _loc5_:uint = _loc3_.readUnsignedInt();
         var _loc6_:int;
         if((_loc6_ = int(UserManager.getUserIDList().indexOf(_loc4_))) != -1)
         {
            if(_loc7_ = UserManager.getUserModelList()[_loc6_])
            {
               if(_loc5_ == 0)
               {
                  KTool.removeChildFormContainer(_loc7_,"pet");
                  (_loc8_ = new PeculiarAction()).standUp(_loc7_.skeleton as EmptySkeletonStrategy);
                  _loc7_.clickMc.y = -50;
                  _loc7_.removeEventListener(RobotEvent.CHANGE_DIRECTION,arguments.callee);
                  _loc7_.removeEventListener(RobotEvent.WALK_START,arguments.callee);
                  _loc7_.removeEventListener(RobotEvent.WALK_END,arguments.callee);
                  _loc7_.skeleton.getBodyMC().visible = true;
               }
               else
               {
                  ResourceManager.getResource(ClientConfig.getResPath("pet/swf/bt.swf"),Delegate.create(this.onLoadOtherComplete,_loc7_),"pet");
               }
            }
         }
      }
      
      private function onCheckAll(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:int = 0;
         var _loc8_:BasePeoleModel = null;
         SocketConnection.removeCmdListener(CommandID.MAC_KING_CHECK_ALL_USER,this.onCheckAll);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = _loc2_.readUnsignedInt();
            if((_loc6_ = _loc2_.readUnsignedInt()) > 0)
            {
               if((_loc7_ = int(UserManager.getUserIDList().indexOf(_loc5_))) != -1)
               {
                  if(_loc8_ = UserManager.getUserModelList()[_loc7_])
                  {
                     ResourceManager.getResource(ClientConfig.getResPath("pet/swf/bt.swf"),Delegate.create(this.onLoadOtherComplete,_loc8_),"pet");
                  }
               }
            }
            _loc4_++;
         }
      }
      
      private function onLoadOtherComplete(param1:DisplayObject, param2:BasePeoleModel) : void
      {
         var npc:MovieClip = null;
         var o:DisplayObject = param1;
         var model:BasePeoleModel = param2;
         npc = o as MovieClip;
         npc.gotoAndStop("right");
         this.playOrStopChild(npc,"mc",false);
         model.skeleton.getBodyMC().gotoAndStop("right");
         model.skeleton.getBodyMC().visible = false;
         model.addChildAt(npc,0);
         model.addEventListener(RobotEvent.CHANGE_DIRECTION,function(param1:DynamicEvent):void
         {
            var _loc2_:String = param1.paramObject as String;
            npc.gotoAndStop(_loc2_);
         });
         model.addEventListener(RobotEvent.WALK_START,function(param1:RobotEvent):void
         {
            playOrStopChild(npc,"mc",true);
         });
         model.addEventListener(RobotEvent.WALK_END,function(param1:RobotEvent):void
         {
            playOrStopChild(npc,"mc",false);
         });
      }
      
      public function showPanel(param1:MovieClip) : void
      {
         var _loc2_:uint = uint(param1.name.slice(4));
         ModuleManager.showModule(ClientConfig.getAppModule("MacKingCombPanel"),"正在打开面板",_loc2_);
      }
      
      public function unBt() : void
      {
         if(this._isSteup == true)
         {
            SocketConnection.addCmdListener(CommandID.MAC_KING_PUT_ON_CLOTH,this.onTaskOffCloth);
            SocketConnection.send(CommandID.MAC_KING_PUT_ON_CLOTH,0);
         }
      }
      
      public function destroy() : void
      {
         var _loc2_:PeculiarAction = null;
         UserManager.removeEventListener(UserEvent.INFO_CHANGE,this.onMapUserInfoChange);
         SocketConnection.removeCmdListener(CommandID.MAC_KING_CHANGE_CLOTH,this.onUserChange);
         if(MainManager.isFighting == false)
         {
            if(this._isSteup == true)
            {
               DisplayUtil.removeForParent(this.bt);
               this.bt = null;
               _loc2_ = new PeculiarAction();
               _loc2_.standUp(MainManager.actorModel.skeleton as EmptySkeletonStrategy);
               MainManager.actorModel.clickMc.y = -50;
               MainManager.actorModel.removeEventListener(RobotEvent.CHANGE_DIRECTION,this.onChange);
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
               MainManager.actorModel.skeleton.getBodyMC().visible = true;
               this._isSteup = false;
            }
         }
         ToolTipManager.remove(this._map.conLevel["boxMC"] as SimpleButton);
         (this._map.conLevel["boxMC"] as SimpleButton).removeEventListener(MouseEvent.CLICK,this.onBox);
         var _loc1_:uint = 0;
         while(_loc1_ < 6)
         {
            ToolTipManager.remove(this._map.conLevel["pet_" + _loc1_] as MovieClip);
            _loc1_++;
         }
         ToolTipManager.remove(this._map.depthLevel["startBtn"] as SimpleButton);
      }
      
      private function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.SAIBOSITE,["机械伙伴们，我一定会找到失落已久的0xff0000机械晶体0xffffff，我会拯救你们，复兴机械王国！"],["哦！这里原来是机械王国！！"],[function():void
               {
                  CommonUI.addYellowArrow(_map.depthLevel["onMC"] as MovieClip,(_map.depthLevel["onMC"] as MovieClip).width / 2,0);
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.SEER,["是我啦！赛伯斯特你在这里做什么啊！好像是在找什么东西吧！我能帮什么忙吗？"],["原来是你啊！"],[function():void
               {
                  NpcDialog.show(NPC.SAIBOSITE,["嘿嘿！我在外面听到里面有动静，所以就进来看看，想不到这里是机械精灵们的王国，我发现新大陆啦！"],["可惜，现在这里只不过是一堆废铜烂铁而已！"],[function():void
                  {
                     KTool.getFrameMc(_map.depthLevel["petMC"] as MovieClip,3,"",function(param1:DisplayObject):void
                     {
                        var o:DisplayObject = param1;
                        var mc:* = o as MovieClip;
                        AnimateManager.playMcAnimate(mc,1,"",function():void
                        {
                           NpcDialog.show(NPC.SEER,["我在寻找机械晶体，这可是机械精灵必不可少的能源，一旦失去机械晶体，就像人失去心脏一样！零件失灵就将是你最终的归宿！！！"],["我很乐意帮助你啊！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIBOSITE,["是吗？那可太好了，有了你的帮助，复兴机械王国就指日可待了！如果你能帮我找到0xff0000 5个机械晶体 0xffffff，那我就把0xff0000泰坦斯机体0xffffff送给你当做礼物，怎么样！"],["那是什么啊！"],[function():void
                              {
                                 KTool.getFrameMc(_map.depthLevel["petMC"] as MovieClip,4,"",function(param1:DisplayObject):void
                                 {
                                    var p:DisplayObject = param1;
                                    var mc_1:* = p as MovieClip;
                                    AnimateManager.playMcAnimate(mc_1,1,"",function():void
                                    {
                                       NpcDialog.show(NPC.SAIBOSITE,["那个就是0xff0000泰坦斯机体0xffffff！现在你就从生产装置中帮我找0xff00005个机械晶体0xffffff来吧！我现在很需要它！否则无法启动0xff0000泰坦斯机体0xffffff！"],["好的，小事一件！"],[function():void
                                       {
                                          TasksManager.complete(TASKID,1,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                CommonUI.addYellowArrow(_map.depthLevel,833,432);
                                                initProcess_3();
                                             }
                                          });
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        });
                     });
                  }]);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.SAIBOSITE,["欢迎来到机械王国，想要复兴机械王国，就必须找到万能的0xff0000机械晶体0xffffff，否则这些沉睡在这里的精灵们都无法恢复！而我机械系之王也将永世伴随这个国度！"],["启动泰坦斯机体。","关于泰坦斯机体。","我一定会帮助你的。"],[function():void
               {
                  ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onItemList);
                  ItemManager.getCollection();
               },function():void
               {
                  NpcDialog.show(NPC.SAIBOSITE,["机械王国中沉睡着许多机械伙伴，但是必须使用0xff0000泰坦斯机体0xffffff，你才能到达那个高度，所以在机械王国0xff0000泰坦斯机体0xffffff就是你必不可少的代步工具！"],["去那找机械晶体！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIBOSITE,["如果你愿意的话，就去附近的机械0xff0000生产装置0xffffff里需找机械晶体吧！说不定还有其他发现哦！"],["好的，我这就去！"],[function():void
                     {
                     }]);
                  }]);
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.SAIBOSITE,["不错哦！看来你已经收集到0xff0000 5个机械晶体0xffffff，这样的话就能顺利启动0xff0000泰坦斯机体0xffffff了！"],["耶，太棒啦！"],[function():void
               {
                  KTool.playFullMovie(31,function():void
                  {
                     NpcDialog.show(NPC.SAIBOSITE,["终于成功了，小赛尔快坐上去感受一下吧！相信你会爱上它的！不过0xff0000泰坦斯机体0xffffff只能在机械王国使用，一旦离开了这里，就无法使用了！"],["恩，我这就试试！"],[function():void
                     {
                        CommonUI.addYellowArrow(_map.depthLevel["macMC"] as MovieClip,20,-20);
                        (_map.depthLevel["macMC"] as MovieClip).buttonMode = true;
                        (_map.depthLevel["macMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onMac);
                     }]);
                  });
               }]);
               break;
            case 5:
               NpcDialog.show(NPC.SAIBOSITE,["看来你还没有寻找到5个机械能量，缺少机械能量，启动失败！！！！"],["看来一定要有大量的机械晶体才行！再去找找！"],[function():void
               {
               }]);
         }
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
