package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class StonyEyesSub6Task extends PlotTask
   {
       
      
      public function StonyEyesSub6Task(param1:MovieClip)
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
                  "value":[[20,"你好，听说你有一块御灵翡翠，能不能卖给我呀？"],[2939,"你要御灵翡翠？那可是好东西！嘿，你看这块，老种，正色，A货，极品！有兴趣吗？我吃点亏，5000钻石卖你怎样？","你这是找打！ "]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesFightPanel",8);
               });
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"诳谁呢你？别在这跟我漫天要价！","哎哟，小祖宗哎，别打了！"]]
               }).doAction().then(function():Promise
               {
                  var defer:* = undefined;
                  defer = new Deferred();
                  NpcDialogNew_1.show(2939,["我错了，我错了！您是识货人，这翡翠48钻您拿去，权当给您赔个礼了行不？"],["拿来！","让我再考虑考虑。"],[function():void
                  {
                     KTool.buyProductByCallback(254300,1,function():void
                     {
                        defer.resolve(null);
                     });
                  },function():void
                  {
                     defer.reject(null);
                  }]);
                  return defer.promise;
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[10,2]);
               }).then(this.updateState);
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"好了！有了御灵翡翠，我就可以再获得一枚刻印了！","这就回去！"]]
               }).doAction().then(function():void
               {
                  KTool.changeMapWithCallBack(11712,function():void
                  {
                  });
               });
            case 4:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"奥杜萨，御灵翡翠我拿来啦！"],[2935,"好，你且看我的……"],[2935,"好了！我将石胎玉……呃，现在它是刻印了。我将这枚刻印上多余的石化气息导入了御灵翡翠之中，这枚翡翠也开始变化了！","真的吗，让我看看！"],[3,"想不到，刻印还可以用这种方式形成。这件事情等我回到飞船，一定要好好研究研究。奥杜萨，你眼睛刚好，不要用眼过度，多休息休息啊！","我明白了！"],[20,"危机解除了，我们也该返回飞船了。奥杜萨，保重！","谢谢各位，保重！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[10,3]);
               }).then(function():void
               {
                  KTool.changeMapWithCallBack(1,function():void
                  {
                     ModuleManager.showAppModule("StonyEyesMainPanel");
                  });
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
               if(MapManager.currentMap.id == 11712)
               {
                  this.onNpcClick(4);
               }
               else
               {
                  this.onNpcClick(state == 1 ? 2 : (state == 2 ? 3 : 1));
               }
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([104514],function(param1:Array):void
         {
            state = param1[0] >> 20 & 15;
            if(state == 2 && MapManager.currentMap.id != 11712)
            {
               onNpcClick(3);
            }
            else if(state == 1)
            {
               onNpcClick(2);
            }
         });
      }
   }
}
