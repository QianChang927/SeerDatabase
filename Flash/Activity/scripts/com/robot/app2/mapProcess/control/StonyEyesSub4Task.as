package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class StonyEyesSub4Task extends PlotTask
   {
       
      
      public function StonyEyesSub4Task(param1:MovieClip)
      {
         super(param1);
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var npcId:int = param1;
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"博士，我回来了！","太好了，奥杜萨有救了！"],[2935,"谢谢你们……我……我真是粉身碎骨也难以报答。","还是先试试看，能不能治好你吧！"],[2935,"好，我一定全力配合你们。","让我们开始！"],[3,"奥杜萨，你抱着这个石胎玉。把它举起来，靠近你的眼睛。","好。"],[2935,"这……我能感觉到，石化之力似乎在消褪！"],[20,"它们都汇入到石胎玉之中了！","没错。"],[3,"石胎玉可以大量吸收石化之力，是救治奥杜萨的不二之选。差不多了，快把隐竹泉水滴入眼睛里！","让我来！"],[20,"一滴……两滴……三滴……怎么样，奥杜萨，你感觉好点了没有？"],[2935,"我的眼睛好干涩，好疼！我……我睁不开眼睛！","博士，这是怎么回事？"],[3,"糟了……石化之力已被排出，这说明石胎玉已经起了作用……那只可能是隐竹泉水不够了，我们需要更多的隐竹泉水！"],[20,"知道了，我这就去找汐汐们！","快去快回！"],[3,"奥杜萨的眼睛现在非常脆弱，如果不尽快找到足够的泉水，很可能会从此失明！三滴……至少还需要3滴！","坚持住啊，奥杜萨！"]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesTipsPanel");
               });
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "close":
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("StonyEyesMainPanel");
               });
               break;
            case "npc_1":
               this.onNpcClick(1);
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([104514],function(param1:Array):void
         {
            state = param1[0] >> 12 & 15;
         });
      }
   }
}
