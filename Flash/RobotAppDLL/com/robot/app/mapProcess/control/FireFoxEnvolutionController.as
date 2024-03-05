package com.robot.app.mapProcess.control
{
   import com.robot.app.control.PetEnvolutionController;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class FireFoxEnvolutionController
   {
      
      private static var _map:BaseMapProcess;
      
      public static const TASK_ID:uint = 1256;
      
      private static var _stage:int;
      
      private static var _hasFreeGet:Boolean;
      
      private static const FOXIDS:Array = [821,1017,1018,1019];
      
      private static const FOXIDNAMES:Array = ["烈焰火狐","三尾火狐","四尾火狐","九尾火狐"];
       
      
      public function FireFoxEnvolutionController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            stage = 0;
            TasksManager.accept(TASK_ID);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  stage = 0;
               }
               else if(!param1[1])
               {
                  stage = 1;
               }
               else if(!param1[2])
               {
                  stage = 2;
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            stage = 3;
         }
         if(TasksManager.getTaskStatus(TASK_ID + 1) == TasksManager.COMPLETE)
         {
            _hasFreeGet = true;
            (_map.conLevel["fireFoxNPC"] as MovieClip).gotoAndStop(stage + 1);
         }
         else
         {
            _hasFreeGet = false;
            (_map.conLevel["fireFoxNPC"] as MovieClip).gotoAndStop(5);
         }
         (_map.conLevel["fireFoxNPC"] as MovieClip).buttonMode = true;
         (_map.conLevel["fireFoxNPC"] as MovieClip).addEventListener(MouseEvent.CLICK,onFreeGainFox);
         showEquipment(_hasFreeGet);
      }
      
      private static function onFreeGainFox(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(_hasFreeGet)
         {
            switch(stage)
            {
               case 0:
                  NpcDialog.show(NPC.LIEYAN_HUOHU,["九尾的力量并不是遥不可及的！ 我要努力修行，冲击九尾的领域，我一定要突破这个界限！"],["只要坚持我一定会成功！"]);
                  break;
               case 1:
                  NpcDialog.show(NPC.SANWEIHU,["只要凝聚了足够的火之力，我就可以进化到更高的形态四尾火狐了！"],["再加把力吧！"]);
                  break;
               case 2:
                  NpcDialog.show(NPC.SIWEIYAOHU,["九尾的力量近在眼前！只要凝聚了足够的火之力，我就可以进化到最高形态九尾火狐了！"],["做最后的冲刺吧！"]);
                  break;
               case 3:
                  NpcDialog.show(NPC.JIUWEIHUOHU,["九尾的力量果然很强大！我已经感受到体内的火之力了！我还需要更多的力量！"],["什么？还能够变得更强！"]);
            }
         }
         else
         {
            CartoonManager.play(ClientConfig.getFullMovie("cartoon/firefoxEnvolution"),function():void
            {
               NpcDialog.show(NPC.LIEYAN_HUOHU,["九尾的力量并不是遥不可及的！ 我要努力修行，冲击九尾的领域，我一定要突破这个界限！"],["只要坚持我一定会成功！"],[function():void
               {
                  TasksManager.accept(TASK_ID + 1,function(param1:Boolean):void
                  {
                     var b:Boolean = param1;
                     TasksManager.complete(TASK_ID + 1,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                        }
                        SocketConnection.send(1022,86051120);
                        TasksManager.accept(TASK_ID);
                        _hasFreeGet = true;
                        (_map.conLevel["fireFoxNPC"] as MovieClip).gotoAndStop(stage + 1);
                        showEquipment(_hasFreeGet);
                     });
                  });
               }]);
            });
         }
      }
      
      private static function showEquipment(param1:Boolean) : void
      {
         (_map.conLevel["envoEquip"] as SimpleButton).visible = false;
         (_map.conLevel["guideEquip"] as SimpleButton).visible = false;
         (_map.conLevel["exchEquip"] as SimpleButton).visible = param1;
         if(param1)
         {
            ToolTipManager.add(_map.conLevel["envoEquip"],"火之力修行装置");
            ToolTipManager.add(_map.conLevel["guideEquip"],"修行指南装置");
            ToolTipManager.add(_map.conLevel["exchEquip"],"火之力道具兑换装置");
            (_map.conLevel["envoEquip"] as SimpleButton).addEventListener(MouseEvent.CLICK,onEnvolution);
            (_map.conLevel["guideEquip"] as SimpleButton).addEventListener(MouseEvent.CLICK,onGuide);
            (_map.conLevel["exchEquip"] as SimpleButton).addEventListener(MouseEvent.CLICK,onExchange);
         }
         else
         {
            ToolTipManager.remove(_map.conLevel["envoEquip"]);
            ToolTipManager.remove(_map.conLevel["guideEquip"]);
            ToolTipManager.remove(_map.conLevel["exchEquip"]);
            (_map.conLevel["envoEquip"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onEnvolution);
            (_map.conLevel["guideEquip"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onGuide);
            (_map.conLevel["exchEquip"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onExchange);
         }
      }
      
      private static function onEnvolution(param1:MouseEvent) : void
      {
         var _loc2_:PetInfo = PetEnvolutionController.isPetInBag(FOXIDS[stage]);
         if(_loc2_ != null)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FirefoxEnvolutionPanel"),"正在打开……",_loc2_);
         }
         else
         {
            Alarm.show("将你的" + FOXIDNAMES[stage] + "放入精灵背包中才能继续修行哦！");
         }
      }
      
      private static function onGuide(param1:MouseEvent) : void
      {
         var _loc2_:PetInfo = PetEnvolutionController.isPetInBag(FOXIDS[stage]);
         ModuleManager.showModule(ClientConfig.getAppModule("FirefoxGuideMsgPanel"),"正在打开……",[_loc2_,stage]);
      }
      
      private static function onExchange(param1:MouseEvent) : void
      {
         var _loc2_:PetInfo = PetEnvolutionController.isPetInBag(FOXIDS[stage]);
         if(_loc2_ != null)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FirefoxExchangePanel"),"正在打开……",_loc2_);
         }
         else
         {
            Alarm.show("将你的" + FOXIDNAMES[stage] + "放入精灵背包中开始兑换吧！");
         }
      }
      
      public static function get stage() : int
      {
         return _stage;
      }
      
      public static function set stage(param1:int) : void
      {
         _stage = param1;
         (_map.conLevel["fireFoxNPC"] as MovieClip).gotoAndStop(stage + 1);
         ToolTipManager.add(_map.conLevel["fireFoxNPC"] as MovieClip,FOXIDNAMES[stage]);
      }
   }
}
