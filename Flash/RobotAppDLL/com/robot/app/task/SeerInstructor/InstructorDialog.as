package com.robot.app.task.SeerInstructor
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public class InstructorDialog
   {
      
      private static var mc:MovieClip;
      
      private static var signBtn:SimpleButton;
      
      private static var awardBtn:SimpleButton;
      
      private static var removeBtn:SimpleButton;
      
      private static var exitBtn:SimpleButton;
       
      
      public function InstructorDialog()
      {
         super();
      }
      
      public static function show() : void
      {
         showDialog();
      }
      
      private static function showDialog() : void
      {
         NpcDialog.show(NPC.LYMAN,["你好，我是赛尔号的总教官雷蒙，培养新加入的小赛尔是我的主要责任！希望你尽快成长为赛尔精英！"],["我想找教官！","我想找学员！","不好意思，我走错了...."],[handler1,handler2]);
      }
      
      private static function handler1() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewInstructorMain"),"正在加载...",0);
      }
      
      private static function handler2() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewInstructorMain"),"正在加载...",1);
      }
   }
}
