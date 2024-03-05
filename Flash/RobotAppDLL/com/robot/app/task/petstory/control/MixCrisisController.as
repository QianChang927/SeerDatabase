package com.robot.app.task.petstory.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MixCrisisController
   {
      
      private static var _instance:com.robot.app.task.petstory.control.MixCrisisController;
      
      private static const TASKID:uint = 750;
      
      private static var hasBoxMapIdList:Array = [497,57,315,53,25,40];
      
      private static var mapAnsName:Array = ["MixCrisis_497","MixCrisis_57","MixCrisis_315","MixCrisis_53","MixCrisis_25","MixCrisis_40"];
       
      
      private var _map:BaseMapProcess;
      
      private var isActive:Boolean = false;
      
      private var _map_2:BaseMapProcess;
      
      private var isActive_2:Boolean = false;
      
      private var boxNameList:Array;
      
      public function MixCrisisController(param1:PrivateClass)
      {
         this.boxNameList = ["纯金","翡翠","幽暗","木质","山岩","冰锥"];
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.MixCrisisController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.MixCrisisController(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         (this._map.depthLevel["macMC"] as MovieClip).visible = false;
         (this._map.depthLevel["pirateMC_1"] as MovieClip).visible = false;
         (this._map.depthLevel["pirateMC_2"] as MovieClip).visible = false;
         (this._map.depthLevel["pirateMC_1"] as MovieClip).buttonMode = true;
         (this._map.depthLevel["pirateMC_2"] as MovieClip).buttonMode = true;
         (this._map.depthLevel["pirateMC_1"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPirate);
         (this._map.depthLevel["pirateMC_2"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPirate);
         ToolTipManager.add(this._map.depthLevel["pirateMC_1"] as MovieClip,"海盗杂兵");
         ToolTipManager.add(this._map.depthLevel["pirateMC_2"] as MovieClip,"海盗杂兵");
         (this._map.depthLevel["tipMC"] as MovieClip).buttonMode = true;
         (this._map.depthLevel["tipMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onTip);
         ToolTipManager.add(this._map.depthLevel["tipMC"] as MovieClip,"告示牌");
         this.checkActive();
      }
      
      private function checkActive() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:CronTimeVo = new CronTimeVo("30-60","18","21-28","2","*","2014");
         var _loc3_:CronTimeVo = new CronTimeVo("0-30","20","21-28","2","*","2014");
         var _loc4_:CronTimeVo = new CronTimeVo("*","19","21-28","2","*","2014");
         var _loc5_:CronTimeVo = new CronTimeVo("30-60","18","1-6","3","*","2014");
         var _loc6_:CronTimeVo = new CronTimeVo("0-30","20","1-6","3","*","2014");
         var _loc7_:CronTimeVo = new CronTimeVo("*","19","1-6","3","*","2014");
         if(Boolean(_loc2_.isActive(_loc1_)) || Boolean(_loc3_.isActive(_loc1_)) || Boolean(_loc4_.isActive(_loc1_)) || Boolean(_loc5_.isActive(_loc1_)) || Boolean(_loc6_.isActive(_loc1_)) || Boolean(_loc7_.isActive(_loc1_)))
         {
            OgreController.isShow = false;
            this.checkTask();
            (this._map.depthLevel["pirateMC_1"] as MovieClip).visible = true;
            (this._map.depthLevel["pirateMC_2"] as MovieClip).visible = true;
            this.isActive = true;
         }
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
            OgreController.isShow = true;
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
      }
      
      private function initProcess_1() : void
      {
         (this._map.depthLevel["macMC"] as MovieClip).visible = true;
         KTool.playFullMovie(32,function():void
         {
            dialogSwitch(1);
         });
      }
      
      private function initProcess_2() : void
      {
         (this._map.depthLevel["macMC"] as MovieClip).visible = true;
         this.dialogSwitch(2);
      }
      
      private function initProcess_3() : void
      {
         (this._map.depthLevel["macMC"] as MovieClip).visible = false;
         CommonUI.addYellowArrow(this._map.depthLevel["tipMC"] as MovieClip,(this._map.depthLevel["tipMC"] as MovieClip).width / 2,0);
      }
      
      private function onPirate(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("海盗杂兵",1);
      }
      
      private function onTip(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(this._map.depthLevel["tipMC"] as MovieClip);
         ModuleManager.showModule(ClientConfig.getAppModule("MixCrisisInfoPanel"),"正在打开介绍面板");
      }
      
      public function onMaster() : void
      {
         if(this.isActive == true)
         {
            this.dialogSwitch(3);
         }
         else
         {
            this.dialogSwitch(4);
         }
      }
      
      public function relationMapInit(param1:BaseMapProcess) : void
      {
         this._map_2 = param1;
         (this._map_2.depthLevel["pirateMC"] as MovieClip).buttonMode = true;
         (this._map_2.depthLevel["pirateMC"] as MovieClip).mouseChildren = false;
         (this._map_2.depthLevel["pirateMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPirate_1);
         (this._map_2.depthLevel["pirateMC"] as MovieClip).gotoAndStop(1);
         (this._map_2.depthLevel["boxMC"] as MovieClip).gotoAndStop(1);
         ToolTipManager.add(this._map_2.depthLevel["pirateMC"] as MovieClip,"海盗杂兵");
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:CronTimeVo = new CronTimeVo("30-60","18","21-28","2","*","2014");
         var _loc4_:CronTimeVo = new CronTimeVo("0-30","20","21-28","2","*","2014");
         var _loc5_:CronTimeVo = new CronTimeVo("*","19","21-28","2","*","2014");
         var _loc6_:CronTimeVo = new CronTimeVo("30-60","18","1-6","3","*","2014");
         var _loc7_:CronTimeVo = new CronTimeVo("0-30","20","1-6","3","*","2014");
         var _loc8_:CronTimeVo = new CronTimeVo("*","19","1-6","3","*","2014");
         if(Boolean(_loc3_.isActive(_loc2_)) || Boolean(_loc4_.isActive(_loc2_)) || Boolean(_loc5_.isActive(_loc2_)) || Boolean(_loc6_.isActive(_loc2_)) || Boolean(_loc7_.isActive(_loc2_)) || Boolean(_loc8_.isActive(_loc2_)))
         {
            (this._map_2.depthLevel["pirateMC"] as MovieClip).gotoAndStop(2);
            this.isActive_2 = true;
         }
      }
      
      private function onPirate_1(param1:MouseEvent) : void
      {
         if(this.isActive_2 == true)
         {
            this.dialogSwitch(5);
         }
         else
         {
            this.dialogSwitch(6);
         }
      }
      
      private function getBoxName() : String
      {
         var _loc1_:String = null;
         var _loc2_:int = hasBoxMapIdList.indexOf(MapManager.currentMap.id);
         return this.boxNameList[_loc2_];
      }
      
      private function askServerSavePet() : void
      {
         SocketConnection.addCmdListener(CommandID.MIX_CRISIS_GET_PET_INFO,this.onPetInfo);
         SocketConnection.send(CommandID.MIX_CRISIS_GET_PET_INFO);
      }
      
      private function onPetInfo(param1:SocketEvent) : void
      {
         var ba:ByteArray;
         var petId:uint = 0;
         var index:uint = 0;
         var e:SocketEvent = param1;
         (this._map_2.depthLevel["pirateMC"] as MovieClip).mouseEnabled = false;
         SocketConnection.removeCmdListener(CommandID.MIX_CRISIS_GET_PET_INFO,this.onPetInfo);
         ba = e.data as ByteArray;
         petId = ba.readUnsignedInt();
         index = ba.readUnsignedInt();
         KTool.getFrameMc(this._map_2.depthLevel["boxMC"] as MovieClip,2,"",function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               DisplayUtil.removeAllChild(mc["petCon"]);
               ResourceManager.getResource(ClientConfig.getPetSwfPath(petId),function(param1:DisplayObject):void
               {
                  var s:DisplayObject = param1;
                  var m:MovieClip = s as MovieClip;
                  m.scaleX = m.scaleY = 1.5;
                  (mc["petCon"] as MovieClip).addChild(m);
                  (mc["petCon"] as MovieClip).x = (_map_2.depthLevel["boxMC"] as MovieClip).x + 48;
                  (mc["petCon"] as MovieClip).y = (_map_2.depthLevel["boxMC"] as MovieClip).y + 50;
                  _map_2.depthLevel.addChild(mc["petCon"] as MovieClip);
                  (mc["petCon"] as MovieClip).buttonMode = true;
                  ToolTipManager.add(mc["petCon"] as MovieClip,PetBookXMLInfo.getName(petId));
                  (mc["petCon"] as MovieClip).addEventListener(MouseEvent.CLICK,function():void
                  {
                     SocketConnection.send(CommandID.MIX_CRISIS_FIGHT_PET,index);
                  });
               },"pet");
            });
         });
      }
      
      public function relationMapDestroy() : void
      {
         if(this._map_2)
         {
            ToolTipManager.remove(this._map_2.depthLevel["pirateMC"] as MovieClip);
            (this._map_2.depthLevel["pirateMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPirate_1);
            this.isActive_2 = false;
         }
      }
      
      public function destroy() : void
      {
         (this._map.depthLevel["pirateMC_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPirate);
         (this._map.depthLevel["pirateMC_2"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPirate);
         this.isActive = false;
      }
      
      private function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.NEW_ZOG,["啊哈哈！赛尔，你终于来了，收到我给你们的邀请书了吗？你们一定觉得很惊讶吧！这次看你们怎么办！"],["可恶，大坏蛋，你到底想干嘛？"],[function():void
               {
                  NpcDialog.show(NPC.NEW_ZOG,["我们想干嘛？搞破坏、抓精灵将整个世界弄混乱不堪就是我们海盗的目的！"],["快放了这些精灵，否则我就不客气了！"],[function():void
                  {
                     KTool.getFrameMc(_map.depthLevel["macMC"] as MovieClip,1,"",function(param1:DisplayObject):void
                     {
                        var o:DisplayObject = param1;
                        var mc:* = o as MovieClip;
                        AnimateManager.playMcAnimate(mc,1,"",function():void
                        {
                           TasksManager.complete(TASKID,0,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 initProcess_2();
                              }
                           });
                        });
                     });
                  }]);
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.SEER,["快说吧！这次又是什么花招，我赛尔奉陪到底！不过我可告诉你，这次我的目的不仅仅是拯救这些精灵伙伴，我还要彻底消灭你们！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.NEW_ZOG,["哟！口气不小！我告诉你，这些精灵都被我们关押在不同的星球，而且你一定要收集不同的钥匙才能打开不同的铁笼才行！时间不多，好好把握吧！"],["什么！竟然如此卑鄙！"],[function():void
                  {
                     KTool.getFrameMc(_map.depthLevel["macMC"] as MovieClip,2,"",function(param1:DisplayObject):void
                     {
                        var o:DisplayObject = param1;
                        var mc:* = o as MovieClip;
                        AnimateManager.playMcAnimate(mc,1,"",function():void
                        {
                           KTool.getFrameMc(_map.depthLevel["macMC"] as MovieClip,3,"",function(param1:DisplayObject):void
                           {
                              var s:DisplayObject = param1;
                              var mc_1:* = s as MovieClip;
                              AnimateManager.playMcAnimate(mc_1,1,"",function():void
                              {
                                 NpcDialog.show(NPC.HAIDAO_DUANZAOSHI,["别急孩子，你还是有机会的，如果你敢挑战我们这里的0xff0000要塞守护兵0xffffff，还是有机会可以获得这些钥匙的，不过就看你够不够这个实力了！"],["这些小事难不倒我！"],[function():void
                                 {
                                    NpcDialog.show(NPC.HAIDAO_DUANZAOSHI,["好！我最喜欢看到这样的态度，够自信！不妨告诉你，我们可以告诉你这些被押精灵的具体地点，不过其他的就需要你自己努力了！"],["快去看看那些精灵的方位吧！"],[function():void
                                    {
                                       TasksManager.complete(TASKID,1,function(param1:Boolean):void
                                       {
                                          if(param1)
                                          {
                                             initProcess_3();
                                             OgreController.isShow = true;
                                          }
                                       });
                                    }]);
                                 }]);
                              });
                           });
                        });
                     });
                  }]);
               });
               break;
            case 3:
               NpcDialog.show(NPC.HAIDAO_DUANZAOSHI,["你有多余的材料吗？如果你可以帮助我提前完成我的任务，我就把我珍藏已久的宝贝送给你，快去我附近的0xff0000锻造台0xffffff看看吧！相信你一定需要这些东西！"],["是嘛？让我先看看！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MixCrisisExchangePanel"),"正在打开兑换面板");
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.HAIDAO_DUANZAOSHI,["每天都是如此，不停的锻造….真是苦命的差事啊！"],["咦！那不是海盗吗？它在这里做什么？"],[function():void
               {
                  NpcDialog.show(NPC.HAIDAO_DUANZAOSHI,["相信你一定是来拯救你的伙伴！佐格它们不知道从哪里抓来的精灵，现在正要我抓紧时间打造铁笼呢！晚上0xff0000 18:30—20:30 0xffffff再来这里看看吧！"],["又是海盗，可恶，这次我非教训它们不可！"],[function():void
                  {
                  }]);
               }]);
               break;
            case 5:
               NpcDialog.show(NPC.PIRATE,["老大命令我看守好这里，除非你有海盗锻造师的" + this.getBoxName() + "钥匙，否则休想打开这个" + this.getBoxName() + "牢笼，不信你可以试试，哈哈！"],["我还是去海盗要塞废墟再找找吧！",["我已经拿到了！"]],[function():void
               {
                  MapManager.changeMap(48);
               },function():void
               {
                  askServerSavePet();
               }]);
               break;
            case 6:
               NpcDialog.show(NPC.PIRATE,["老大们说每天晚上18:30—20:30会把那些融合精灵扣押过来，我还是先睡会再说，晚上可以保证精力！呼呼呼~"],["晚上我一定要救出它们！"]);
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
